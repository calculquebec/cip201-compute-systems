#!/bin/bash

RESULTS=$SCRATCH/data/res_prll
MY_PROJECT=$(ls -d $HOME/projects/def-*/$USER)
FINAL_TSV=$MY_PROJECT/results.tsv

cd $RESULTS

echo -e 'unknown\tspecies\tpercentage' > $FINAL_TSV

for filename in $(ls); do
  unknown=$(echo $filename | cut -d_ -f2)
  species=$(echo $filename | cut -d_ -f3)
  echo -en "$unknown\t$species\t"

  grep Identities $filename | awk '{print $3}' | tr '/' ' ' | awk '
    BEGIN {m=0; b=0;}
    {m+=$1; b+=$2;}
    END {b++; percent=100.0*m/b; print percent"%"}'
done >> $FINAL_TSV

echo $FINAL_TSV
cat $FINAL_TSV
