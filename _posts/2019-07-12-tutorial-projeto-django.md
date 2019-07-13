---
layout: page
title:  "Parte I: Desenvolvendo um projeto web com Django 2.x"
date:   2019-07-12 21:21
descricao: "Passo a Passo de como criar uma projeto completo com banco de dados e customização do django admin."
---


# TUTORIAL 01

### Usando o terminal.

#### Crie uma pasta chamada projeto-lista-compras, para isso digite:

```

mkdir  projeto-lista-compras
cd projeto-lista-compras

```

### Vamos baixar virtualenv.

```

pip install virtualenv

```

#### Agora vamos criar uma virtual enviroment (ambiente virtual) dessa forma trabalhamos de forma isolada num ambiente exclusivo:

##### Primeiro vamos criar a sua virtualenv.
<br>
Windows

```

virtualenv .lista
.lista\Scripts\activate

```

Linux

```

virtualenv .lista
source .lista/bin/activate

```


## Depois de criada e ativada a virtualenv, vamos instalar o django:

```

pip install django [ENTER]

```

## Já podemos criar nosso primeiro projeto:

```

django-admin startproject lista-de-compras . 

```
##### Obs.: Digite os comandos conforme está ai no quadro anterior, com esse ponto no final dando um espaço.
<br>
## Agora vamos testar se tudo que fizemos está correto:

```

python manage.py runserver

```
<!---
![sistema funcionando](/assets/img/tela_projeto.png)
--->
<br>
<br>
## Primeiro APP do sistema.
<br>
### Um sistema em django é composto por varios apps, e para criar um APP de forma automatica, digite:

```

python manage.py startapp core 
  
```

##### Obs.: core será o nosso primeiro app, poderia ter outro nome.
<br>
------------------------------------------------------------
<br>
## Nova etapa.
### Vamos usar o pycharm..
### Entre no pycharm..
<br>
No arquivo senttings.py
vá para INSTALLED_APPS [] e no final da lista insira a instrução:
<br>
```

   'lista-de-compras.core', 

```
<br>
Feito isso vamos criar o modelo da tabela Produto e Categoria
Vá para o diretorio core, abra o arquivo models.py e digite:

```

from django.db import models

class Categoria(models.Model):
    descricao = models.CharField(max_length=80)


class Produto(models.Model):
    descricao = models.CharField(max_length=80)
    preco = models.DecimalField(max_digits=10, decimal_places=2)
    quantidade = models.IntegerField()

```


Precisamos registrar esses models no django admin, então ainda no
diretorio core abra o arquivo admin.py e digite :

```

from django.contrib import admin
from lista_de_compras.core.models import Produto, Categoria

admin.site.register(Produto)
admin.site.register(Categoria)

```

Agora precisamos criar os arquivos de migração e aplicar as migrações
no banco de dados, para isso digite :

```

python manage.py makemigrations
python manage.py migrate

```

Criando o usuario admin para acessar o django Admin:

```

python manage.py createsuperuser

```
   
#### Obs.: o sistema pede pra que você cadastre o usuario e a senha

   
