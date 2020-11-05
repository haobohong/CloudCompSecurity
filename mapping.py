import sys

for line in sys.stdin:
    line = line.strip()
    hour  = line.split()[3][1:-6]
    print (("%s\t%s") % (hour, 1))