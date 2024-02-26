#!/bin/bash

echo '- Going to the root of the material ...'
cd $(dirname $0)/..
CIP201=$PWD

echo '- Copying the data to $SCRATCH ...'
mkdir -p $SCRATCH/data
rsync -a data/ $SCRATCH/data/
cd $SCRATCH

echo '- Submitting the first job ...'
JOB1=$(sbatch --parsable $CIP201/scripts/blastn-gen-seq.sh)
echo '  - First job ID:' $JOB1

echo '- Submitting the second job that depends on the first one ...'
sbatch --dependency=afterok:$JOB1 $CIP201/scripts/blastn-parallel.sh
squeue -u $USER
