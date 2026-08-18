altura = []
masculino = []
feminino = []
pss_femino = 0
media = 0
maior = 0
menor = 0
for i in range (15):
 al = float(input("digite sua altura: "))
 genero = input('digite seu genero (apenas masculino ou feminino):')
 altura.append(al)
 if genero == 'masculino':
  masculino.append(al)
 elif genero == 'feminino':
  feminino.append(al) 
 else:
  print("genero invalido")
  repeat = input("deseja repetir o processo? (sim ou nao): ")
  if repeat == 'sim':
    al = float(input("digite sua altura: "))
    genero = input('digite seu genero (apenas masculino ou feminino):')
    altura.append(al)
    if genero == 'masculino':
     masculino.append(al)
    elif genero == 'feminino':
     feminino.append(al)
 if genero == 'feminino':
    pss_femino += 1
 
media = sum(masculino)/len(masculino) 
maior = max(altura)
menor = min(altura)
   

print("a media de altura dos homens é: ", f"{media:.2f}")
print("a maior altura é: ", f"{maior:.2f}")
print("a menor altura é: ", f"{menor:.2f}")
print("a quantidade de mulheres é: ", pss_femino)