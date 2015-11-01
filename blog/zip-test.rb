a = [ 4, 5, 6 ]
b = [ 7, 8, 9 ]
c = [ 10, 11, 12 ]
d = [ 13, 14, 15 ]

a.zip(b, c, d) {|zipped_array| puts zipped_array.object_id}