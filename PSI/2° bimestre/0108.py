# # 02 - utilizando if/else simular a operação de uma calculadora
# #      deverá receber dois números e um operador
# #      se o operador for +(somar), - (subtrair), * (multiplicar) e / (dividir)
# #      você deverá imprimir o resultado
# #      você deverá validar se o divisor é igual a zero, se sim, colocar uma mensagem

# num1 = float(input('digite um número:'))
# num2 = float(input('digite outro número: '))
# operacao = int(input('Escolha uma operação e digite o número correspondente:\n 1 - Adição\n 2 - Subtração\n 3 - Multiplicação\n 4 - Divisão\n'))

# if operacao == 1:
#     res = num1 + num2
#     print('Este é o resultado desejado: ', res)
# elif operacao ==2:
#     res = num1 - num2
#     print('Este é o resultado desejado: ', res)
# elif operacao == 3:
#     res = num1 * num2
#     print('Este é o resultado desejado: ', res)
# elif operacao == 4:
#     if num2 == 0:
#         print('Não é possível realizar esta operação.')
#     else:
#         res = num1 / num2
#         print('Este é o resultado desejado: ', res)
# else:
#     print('Operação inválida, tente novamente com um número entre 1 e 4.')



#03 - Receba as notas dos 4 bimestres de um aluno, calcule a média
#     e informe se ele está provado (média >=6),
#     em recuperação (média >= 3 e média < 6)
#     ou reprovado (média < 3)

bim1 = int(input('nota do 1° bimestre: '))
bim2 = int(input('nota do 2° bimestre: '))
bim3 = int(input('nota do 3° bimestre: '))
bim4 = int(input('nota do 4° bimestre: '))
media = (bim1 + bim2 + bim3 + bim4) // 4
print('Sua média é:', media)
if media >= 6:
    print('Você está aprovad!!')
elif 3 <= media < 6:
    print('Você está em recuperação!!')
elif media < 3:
    print('Você está reprovado!!')


