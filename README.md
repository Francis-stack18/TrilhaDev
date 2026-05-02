# 🧮 Calculadora JavaScript
> Projeto de calculadora personalizada, desenvolvido com foco em **Lógica de Programação**, **POO** e **UX Design** como identidade visual da Saipos.

---

## 🚀 Tecnologias
- [JavaScript ES6+](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [HTML5 & SVG](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS3 (Flexbox & Variables)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)

---

## 🌟 Diferenciais Técnicos (Extras)

Além das operações básicas, o projeto conta com implementações avançadas para melhorar a experiência do usuário:

- **📋 Integração com Clipboard:** Suporte nativo para Copiar (`Ctrl + C`) o valor do display e Colar (`Ctrl + V`) números externos diretamente na calculadora.
- **🔊 Feedback Sonoro:** Sistema de som ao pressionar as teclas, com recurso de *Toggle* (Ligar/Desligar) ao efetuar um **duplo clique** no botão `AC`.
- **🔢 Validação de Decimais:** Lógica de entrada inteligente que impede a inserção de múltiplos pontos em um mesmo número, garantindo a integridade dos cálculos.
- **🛡️ Tratamento de Exceções:** Implementação de um estado de `Error` visual para mitigar operações matemáticas inválidas ou falhas de sintaxe.
- **📅 Localização Dinâmica:** Exibição de data e hora em tempo real, formatadas rigorosamente sob o padrão **pt-BR**.

  ---

## 📁 Estrutura de Pastas
```text
/
├── assets/               # Recursos estáticos
│   ├── css/              # Estilização (style.css)
│   ├── images/           # Logos e wallpapers
│   └── js/               # Lógica do projeto
│       ├── controller/   # Classe CalcController.js
│       └── calculator.js # Inicialização
├── index.html            # Interface e SVG
└── README.md             # Documentação