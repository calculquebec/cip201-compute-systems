#!/usr/bin/env python

import argparse
import timeit


def crunch(lib, N):
    '''Stress test with expensive matrix operations
    Arguments :
        lib - numpy or cupy library
        N - size of the cubic matrix to create
    '''
    matrix_3d = lib.ones((N, N, N))
    matrix_3d /= (N + 1.0)
    matrix_3d.cumsum()
    matrix_3d @ matrix_3d


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument(
        '-n', '--size', type=int, default=512, help='Size of 3D matrix')
    parser.add_argument('--cpu', action='store_true', help='Use CPU cores')
    parser.add_argument('--gpu', action='store_true', help='Use one GPU')

    args = parser.parse_args()
    n = args.size

    if args.cpu:
        import numpy as np
        repet = 4
        temps_sec = timeit.Timer(lambda: crunch(np, n)).timeit(repet)
        print(f'numpy : {temps_sec / repet:.3f} sec.')

    if args.gpu:
        import cupy as cp
        repet = 64
        temps_sec = timeit.Timer(lambda: crunch(cp, n)).timeit(repet)
        print(f'cupy : {temps_sec / repet:.3f} sec.')
