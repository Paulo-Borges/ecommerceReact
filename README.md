# 👟 E-commerce Sneaker Shop (Página de Produto)

Bem-vindo ao _front-end_ de uma página de produto para uma loja de tênis! Este projeto foca na experiência do usuário ao navegar pela galeria de imagens, escolher a quantidade de itens e adicionar ao carrinho. É a base perfeita para quem quer praticar a construção de interfaces interativas e responsivas.

## ✨ O que este Projeto Faz?

A aplicação simula a visualização e interação com um único produto: o **"Fall Limited Edition Sneakers"**. As principais funcionalidades que você encontra aqui são:

- **Galeria de Imagens Dinâmica:** Troque a imagem principal com um clique, tanto na versão desktop quanto na versão mobile (com carrossel simples).
- **Contador de Quantidade:** Use os botões de `+` e `-` para definir quantos pares de tênis deseja comprar.
- **Controle de Preço:** O preço total é atualizado dinamicamente de acordo com a quantidade selecionada (embora o preço riscado permaneça estático).
- **Carrinho Pop-up:** Um ícone de carrinho no cabeçalho permite abrir e fechar um pop-up (`<Cart />`) para simular a visualização do carrinho (a lógica de adição de itens no carrinho está no botão "Add to cart").
- **Design Responsivo:** A estrutura se adapta bem a diferentes tamanhos de tela, com elementos reorganizados e a galeria de imagens substituída por um carrossel simples no mobile.

---

## 🛠️ Stack Tecnológica (A Receita do Sucesso)

Este projeto foi construído usando componentes modernos do React e um sistema de _styling_ ágil:

### O Coração da Aplicação

- **⚛️ React:** Utilizado para construir a interface de usuário baseada em componentes, gerenciando o estado (como a quantidade, a imagem atual e se o carrinho está aberto) de forma eficiente.
- **⚡ Vite:** O _bundler_ que proporciona um desenvolvimento rápido para o projeto.

### Estilo e Visual

- **🎨 Tailwind CSS (Implícito):** Todas aquelas classes como `max-[640px]:flex-col`, `bg-amber-500` e `text-3xl` indicam que o Tailwind foi usado para construir a interface de forma rápida e focada em utilidades.
- **✨ React Icons (`react-icons/fa` e `fa6`):** Usamos ícones vetoriais práticos do pacote **Font Awesome** para os botões de `+` e `-` (`FaPlus`, `FaMinus`).
- **🖼️ SVG/Imagens:** O ícone do carrinho (`icon-cart.svg`) e o avatar (`image-avatar.png`) são utilizados no componente de cabeçalho.

### Gerenciamento de Estado

- **`useState` Hook:** Essencial para rastrear e manipular:
  - `incrementar`: a quantidade de itens selecionados.
  - `cartOpen`: o estado de visibilidade do pop-up do carrinho.
  - `capital`: o preço total dos itens selecionados (que acompanha o `incrementar` com uma lógica de preço de $125.0 por unidade).

---

## 📂 Estrutura do Projeto (Onde a Interface Ganha Vida)

A maior parte da lógica e do _layout_ está no componente principal, **`App.jsx`**, que orquestra a exibição dos demais componentes:

| Arquivo             | O que ele faz?                                                                                                                                                                     |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **`App.jsx`**       | O componente principal. Ele gerencia os _states_ centrais (quantidade, preço e carrinho), define as lógicas de incremento/decremento e renderiza o cabeçalho e a seção de produto. |
| **`Headers.jsx`**   | O cabeçalho da aplicação. Contém o logo, a navegação (oculta no mobile) e os ícones de carrinho e avatar. Gerencia a abertura/fechamento do pop-up do carrinho.                    |
| **`MainImage.jsx`** | O componente para exibir a imagem principal do produto. No desktop, permite trocar de imagem clicando na foto (avançando para a próxima imagem da galeria).                        |
| **`ImgMobile.jsx`** | Componente alternativo para telas pequenas (`max-[640px]:hidden`). Apresenta a imagem principal e gerencia a troca de imagens para o carrossel simples mobile.                     |
| **`Cart.jsx`**      | Componente do pop-up do carrinho (renderizado, mas a lógica interna de exibição de itens está no próprio componente).                                                              |

## 🏃 Como Rodar Este Projeto

Para ter esta linda página de produto rodando localmente, siga estes passos (assumindo que você já tem os arquivos de imagem referenciados):

1.  **Clone o repositório e navegue até a pasta do projeto.**
2.  **Instale as dependências:**
    ```bash
    npm install
    # ou yarn install
    ```
3.  **Inicie o servidor de desenvolvimento com o Vite:**
    ```bash
    npm run dev
    # ou yarn dev
    ```

Abra seu navegador e comece a testar a responsividade e as interações!
