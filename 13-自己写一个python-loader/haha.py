import json
import sys

pretty= 'pretty' in sys.argv

a={
    "one":1,"two":2,"three":3
}
if not pretty:
    print(json.dumps(a))
else:
    print(json.dumps(a,ensure_ascii=0,indent=2))