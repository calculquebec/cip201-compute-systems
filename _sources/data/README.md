# Generating the data

## Required modules
```
module load gcc blast+ seqkit
```

## Generating random sequences
* Four know species (species_*.fa)
  * Converted into Blast databases
* 16 files of random sequences of unknow species (chr_*.fa)
  * Divided in 10 file chunks

```
make
```

## Blastn example
```
time -p blastn -db species_A -query chr_M.fa > out_A_M.log
```
