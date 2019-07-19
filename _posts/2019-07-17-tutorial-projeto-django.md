---
layout: page
title:  "Parte II: Desenvolvendo um projeto web com Django 2.x"
date:   2019-07-17 16:37
descricao: "Customizando ao máximo o Django admin. O objetivo é entregar ao nosso cliente um painel administrativo o mais personalizado possível."
---
<style>
p {text-indent: 40px; text-align: justify;font-size:20px;}
</style>

# TUTORIAL 02

O Django admin surge pronto pra ser utilizado, mas como é um painel gerado via sistema, ele se apresenta com uma interface genérica.

## Então vamos customizar o máximo possível.

  De volta a IDE, eu estou usando o Pycharm.

## Traduzindo os textos do Django admim para português.

Abra o arquivo settings.py que está em lista_de_compras, vá até o fim
do arquivo e localize a variavel LANGUAGE_CODE e deixe o codigo conforme a imagem abaixo:

```
LANGUAGE_CODE = 'pt-br'
```

## Customizando o título dos grupos que você criou.

Em nosso caso lá no django admin as tabelas Categoria e Produtos aparecem no grupo core, que é a app onde foi criado os modelos das mesmas. Mas o usuário não precisa ver isso, podemos personalizar esse título mudando para 'Arquivos de Cadastro' ou o que você achar melhor.

Para isso vá até o arquivo apps.py na pasta core e acrescente a linha com o verbose_name.

```
from django.apps import AppConfig

class CoreConfig(AppConfig):
    name = 'core'
    verbose_name = 'Arquivos de Cadastro'
```
Ainda tem mais, para que essa mudança se reflita no django admin, vá até o arquivo settings.py do diretorio lista_de_compras e modifique a variavel INSTALLED_APPS para que fique conforme abaixo.


```
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'core.apps.CoreConfig',
]
```

## Melhorando a apresentação dos dados.

Vamos aplicar alguns detalhes novos nessa rodada.

Ao cadastrar uma categoria ou produto, não aparece com a descrição que colocamos e sim Categoria object (1) ou Produto object (1).

O titulo dos campos das tabelas precisa ser customizado.

No aquivo models.py no diretório core, modifique para fique da seguinte forma:

```
from django.db import models

class Categoria(models.Model):
    descricao = models.CharField('Descrição', max_length=80)

    def __str__(self):
        return self.descricao

class Produto(models.Model):
    descricao = models.CharField('Descrição', max_length=80)
    preco = models.DecimalField('Preço', max_digits=10, decimal_places=2)
    quantidade = models.IntegerField('Qnt.')

    def __str__(self):
        return self.descricao
```

## Alterando o titulo da janela de login e do django admin.

Quando o usuário faz o login o título da janela está com 'Administração do Django', e depois de logar, o título do cabeçalho do django admin tambem. Para customizar com o nome do sistema que estamos criando, faça assim:

No mesmo nível do diretório lista_de_compras crie outro diretório chamado **templates** , e dentro desse crie um chamado **admin**, dentro do diretório admin crie um arquivo com o nome de **base_site.html** com o código abaixo:

![arquivo](/assets/img/base_admin.jpeg)

Ainda tem mais, para que essas mudanças sejam aplicadas, vá para o arquivo settings.py e na variável TEMPLATES faça conforme abaixo:

```
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': ['templates'],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

```


## Para o tutorial não ficar gigante, vamos continuar na PARTE III customizando o Django Admin...
<br>
<br>
<br>