#!/bin/bash
#SBATCH --mem-per-cpu=2000M
#SBATCH --time=0-00:10

module load gcc/9.3.0 python/3.8.10

virtualenv --no-download $SLURM_TMPDIR/venv_numpy
source $SLURM_TMPDIR/venv_numpy/bin/activate
pip install --no-index numpy==1.24.2

if [ "$(basename $PWD)" = "scripts" ]; then
  cd ..
fi

CSV_FILE=time_inv.csv
echo 'time,n' > $CSV_FILE

values_n=(192 384 768 1536 3072 6144)
n_max=6144

for n in ${values_n[@]}; do
  # Réduire le nombre d'appels selon n
  nb_calls=$((2 * n_max / n))
  echo "Calling inv_mat(${n}) ${nb_calls} times ..."

  total_time=0
  for call_id in $(seq 1 $nb_calls); do
    real_time=$(2>&1 time -p python scripts/inv-mat.py $n | grep real)
    time_sec=$(echo $real_time | cut -d' ' -f2)
    total_time=$(echo $total_time + $time_sec | bc -l)
  done

  time_per_call=$(echo $total_time / $nb_calls | bc -l)
  echo "$time_per_call,$n" > $CSV_FILE
done

echo Done.
