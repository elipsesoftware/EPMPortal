# Pipes no EPM Portal

O EPM Portal possui uma ferramenta chamada **Pipe**, que permite fazer cálculos, conversões e formatações diversas nos valores das variáveis.


Para inserir um **Pipe**, passe o mouse sobre o campo e clique no símbolo ao lado:

![how to insert pipe](./images/pipe_insert.PNG)

No campo **Pipe**, selecione a opção que deseja e as opções relacionadas ao tipo do Pipe serão mostradas. 

![how to insert pipe](..\dashboardexamples\images\pipe_screen.PNG)

O campo **Test Input** irá mostrar o valor atual da variável, e pode ser alterado para testes. O campo **Test Output** mostrará o resultado.
Quando o Pipe mostrar contorno em verde, indicará que conseguiu resolver a formatação ou conversão. Se o contorno for da cor laranja, indicará que há algum erro.




A seguir vamos demostrar exemplos de uso de alguns dos Pipes disponíveis:

 ## DateFormat

 Quando é preciso mudar o formato da apresentação de data/hora, esse Pipe poderá fazer conversões diversas, usando a biblioteca Date-FNS (https://date-fns.org/v1.30.1/docs/format).

 Conversão para dia/mês/ano:

 *dd/MM/yyyy*

 Mostrar o dia da semana:

 *"'Hoje é ' eeee"*

Mostrar Hora e Minuto:

*HH:MM*

![Pipe Expression](..\dashboardexamples\images\pipe_formatdate.PNG)


## NumberFormat

Esse Pipe ajudará a formatar os valores numéricos. Utiliza parra isso a biblioteca http://numeraljs.com/.  Veja um exemplo de transformação do número **10000** para o formato **R$ 10 mil**.

![Pipe Expression](..\dashboardexamples\images\pipe_numberformat.PNG)


## Expression

Este Pipe permite criar expressões matemáticas usando a biblioteca https://mathjs.org/. 
Use o termo *value* na expressão para representar o valor da variável. Use os operadores utilizados comumente em linguagens de programação: +, -, *, ^ , sqrt(),  etc.
Por exemplo, para multiplicar o valor por 3, faça:

*value * 3*

Exemplo de expressão mais complexa:

*value ^ 2 + 2***value + 10*

![Pipe Expression](..\dashboardexamples\images\pipe_expression.PNG)

## Json

Use este Pipe principalmente para converter strings no formato:

**[{"chave": valor}]**

para o formato em que os widgets trabalham.

Por exemplo, você pode ter feito um cálculo usando o dataset Typescript ou Processor(Python), e o retorno é:

*[{"nome": "maquina 1", "valor": 10},
 {"nome": "maquina 2", "valor": 8}]*

Use um Pipe para interpretar esses valores:
![how to use json pipe](..\dashboardexamples\images\pipe_json.PNG)

Para mostrar esses dados em um BarChart:

![how to use json pipe in Barchart](..\dashboardexamples\images\bar_chart.PNG)




