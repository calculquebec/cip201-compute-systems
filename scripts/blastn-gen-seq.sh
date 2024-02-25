#!/bin/bash
#SBATCH --ntasks=1
#SBATCH --mem-per-cpu=1000M
#SBATCH --time=0-00:10

module load gcc/9.3.0 python/3.8.10 blast+/2.12.0 seqkit/0.15.0

if [ "$(basename $PWD)" = "scripts" ]; then
  cd ..
fi
cd data

echo "Deleting any old data ..."
rm -f *_*.fa species_*.n??
rm -rf chr_*.fa.split

echo "Creating files for known species ..."
for spec in A B C D; do
  echo "- Species $spec ..."
  python gen_species.py $spec 8000 9600 900 1600 > species_$spec.fa
  makeblastdb -in species_$spec.fa -dbtype nucl -out species_$spec
done

echo "Creating unknown sequence samples ..."
for sample in K L M N O P Q R S T U V W X Y Z; do
  echo "- Sample $sample ..."
  python gen_samples.py $sample 9600 12800 128 256 > chr_$sample.fa
  seqkit split -p 10 chr_$sample.fa
done
