import sys
import os
import json

source_file = sys.argv[1]
option_file = sys.argv[2]
source = open(source_file).read()
option = json.load(open(option_file))

from markdown import markdown

html = markdown(open(source_file).read())
open(source_file, 'w').write(
    f"""
    module.exports={repr(html)}
    """)
