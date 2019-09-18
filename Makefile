all: run

run:
	unbuffer python3 -m http.server 8888 --directory site 1>>std.log 2>>err.log&

clean:
	rm -f *.log
