# Widget boolImage

O widget boolImage permite a exibição dinâmica de imagens com base em um valor booleano. Ao utilizar a propriedade boolValue, é possível alternar entre duas imagens distintas, definidas pelas propriedades AddressTrue e AddressFalse.

![image](https://github.com/user-attachments/assets/ecc1b916-690a-411f-9f95-79e78425286f)

## Propriedades

![image](https://github.com/user-attachments/assets/f5c94e86-dad5-4676-bb6f-c00bd9e4235c)

### Descrição das propriedades

| **Propriedade** | **Descrição** |
| :------- | :------ |
| **AddressFalse**  | Informa o endereço da imagem a ser exibida quando o valor da propriedade boolValue for igual a False. O endereço da imagem vem dos recursos do EPM Portal. Portanto, esta imagem deve ser carregada na pasta de recursos  | 
| **AddressTrue**  | Informa o endereço da imagem a ser exibida quando o valor da propriedade boolValue for igual a True. O endereço da imagem vem dos recursos do EPM Portal. Portanto, esta imagem deve ser carregada na pasta de recursos |
| **boolValue**  | Propriedade booleana que determina qual imagem será exibida. Os caminhos das imagens para os valores verdadeiro e falso devem ser configurados nas propriedades AddressTrue e AddressFalse, respectivamente. Informação: Permite configurar Binding e Pipes.  | 
| **View Mode** | Define a forma de preenchimento da imagem neste Widget. Os valores possíveis são Center: A imagem é exibida no tamanho original e centralizada, Fit: A imagem é exibida com o tamanho alterado, de forma a preencher a altura ou a largura deste Widget, o que proporciona um tamanho maior sem cortar a imagem, preservando a proporção original e centralizando a imagem horizontal e verticalmente, Fill: A imagem é exibida com o tamanho alterado, de forma a preencher a maior dimensão deste Widget, preservando a proporção original. Portanto, se este Widget é mais largo, o ajuste é pela largura, e se é mais alto, a imagem é ajustada pela altura, mesmo que ocorram cortes, centralizando a imagem horizontal e verticalmente, Stretch: A imagem é exibida com o tamanho alterado, de forma a preencher todo o espaço disponível neste Widget. Neste caso, a imagem pode ter sua proporção original alterada ou Pattern: A imagem é replicada linearmente por todo o espaço deste Widget, mantendo o tamanho e proporção originais, resultando em linhas e colunas ortogonais que acompanham os limites deste Widget  |

## Registro do Widget

Para registrar o widget deve-se:
- Acessar a área de Extensões (*Extensions*) do EPM Portal
- Clicar em instalar (*Install*)
- Localizar o widget.apk (magsWidgetBoolImage.epk) e clicar em abrir (*Open*)
