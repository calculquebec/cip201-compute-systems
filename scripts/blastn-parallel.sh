#!/bin/bash
#SBATCH --cpus-per-task=4
#SBATCH --mem-per-cpu=2000M
#SBATCH --time=0-00:20

if [ "$(basename $PWD)" = "scripts" ]; then
  cd ..
fi
cd data

module load StdEnv/2023 gcc/12.3 blast+/2.14.1 seqkit/2.5.1

mkdir -p res_prll

parallel 'blastn -db species_{1} -query chr_{2}.fa > res_prll/align_{2}_{1}' \
  ::: A B C D ::: K L M N O P Q R S T U V W X Y Z
