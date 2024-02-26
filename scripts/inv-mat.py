#!/usr/bin/env python

import numpy as np
import sys


def inv_mat(n):
    '''Create and invert a square random matrix of size n'''
    np.random.seed(0)              # O(1)
    matrice = np.random.rand(n, n) # O(n^2)
    return np.linalg.inv(matrice)  # O(n^3) ?


def main():
    assert len(sys.argv) > 1, f'syntax: python {sys.argv[0]} n  # where n > 0'

    n = int(sys.argv[1])
    assert n > 0, f'n must be greater than 0'

    inv_mat(n)


if __name__ == "__main__":
    main()
