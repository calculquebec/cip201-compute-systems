#!/bin/bash
#SBATCH --array=1-4%2
#SBATCH --cpus-per-task=2
#SBATCH --mem-per-cpu=2000M
#SBATCH --time=0-00:20

if [ "$(basename $PWD)" = "scripts" ]; then
  cd ..
fi
cd data

module load StdEnv/2023 gcc/12.3 blast+/2.14.1 seqkit/2.5.1

UNKNOWNS=(M N O P Q R)
UNK_X="${UNKNOWNS[$SLURM_ARRAY_TASK_ID]}"
mkdir -p res_array

parallel blastn -db species_{1} \
  -query chr_$UNK_X.fa.split/chr_$UNK_X.part_0{2}.fa \
  '>' res_array/align_${UNK_X}_{1}_{2} ::: A B C D ::: {01..10}
