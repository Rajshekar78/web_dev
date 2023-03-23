import matplotlib.pyplot as pyplot
labels = ('Python','Scala','C#','Java','PHP')
index = (1,2,3,4,5)
sizes = (45,19,78,10,33)

pyplot.bar(index, sizes, tick_label=labels, color = ('red','green','blue','yellow','pink'))
pyplot.ylabel('Usage')
pyplot.xlabel('Programming Languages')

pyplot.show()


