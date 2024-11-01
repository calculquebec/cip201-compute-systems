#!/bin/bash

if [ -z "$SLURM_TMPDIR" ]; then
  echo 'Error: this script must be used from a compute node.'
  echo 'You must first run the "salloc" command.'
  exit
fi

SYNTAX="Syntax: bash $0 --cpu|--gpu [1|4]"

if [ "$#" -lt 1 ]; then
  echo $SYNTAX
  exit
fi

if [ "$1" = '--cpu' ]; then
  if ! [ "$2" = 1 ] && ! [ "$2" = 4 ]; then
    echo 'Error: the second argument must be 1 or 4'
    echo $SYNTAX
    exit
  fi

  module load StdEnv/2023 gcc/12.3 python/3.11

  virtualenv --no-download $SLURM_TMPDIR/venv_numpy
  source $SLURM_TMPDIR/venv_numpy/bin/activate
  pip install --no-index numpy==1.26.4

  export OMP_NUM_THREADS=$2
  time -p python $(dirname $0)/crunch.py -n 672 --cpu > t$2.log &
  echo "It is running!"

elif  [ "$1" = '--gpu' ]; then
  module load StdEnv/2023 gcc/12.3 cuda/12.2 python/3.11

  virtualenv --no-download $SLURM_TMPDIR/venv_cupy
  source $SLURM_TMPDIR/venv_cupy/bin/activate
  pip install --no-index numpy==1.26.4 cupy==12.2.0

  time -p python $(dirname $0)/crunch.py -n 672 --gpu > tg.log &
  echo "It is running!"

else
  echo 'Error: the first argument must be --cpu or --gpu'
  echo $SYNTAX
fi
