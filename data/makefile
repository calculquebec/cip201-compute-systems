CHR_FILES = \
 chr_K.fa chr_L.fa chr_M.fa chr_N.fa chr_O.fa chr_P.fa chr_Q.fa chr_R.fa \
 chr_S.fa chr_T.fa chr_U.fa chr_V.fa chr_W.fa chr_X.fa chr_Y.fa chr_Z.fa

DB_FILES = species_A.nsq species_B.nsq species_C.nsq species_D.nsq
REF_FILES = species_A.fa species_B.fa species_C.fa species_D.fa

.PHONY: all clean

all: $(REF_FILES) $(CHR_FILES) $(DB_FILES)

chr_%.fa: gen_samples.py $(REF_FILES)
	python $< $* 9600 12800 128 256 > $@
	seqkit split -p 10 chr_$*.fa

species_%.fa: gen_species.py
	python $< $* 8000 9600 900 1600 > $@

species_%.nsq: species_%.fa
	makeblastdb -in species_$*.fa -dbtype nucl -out species_$*

clean:
	rm -f *_*.fa species_*.n??
	rm -rf chr_*.fa.split
