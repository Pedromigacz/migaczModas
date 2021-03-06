import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext()

const CartoContextProvider = props => {
    const [cart, setCart] = useState(
        [
            {
              "item": {
                "cores_disponiveis": "azul\nverder\nrosa",
                "descricao": "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.",
                "titulo": "Anuncio numero um, roupa muito top uhuu",
                "tamanhos_disponiveis": "P\nM\nG\nGG",
                "strapiId": 1,
                "preco_promocional": null,
                "preco_em_centavos": 8990,
                "peso_em_kg": 0.18,
                "marca": "Bonequim",
                "largura_da_embalagem_em_cm": 12,
                "altura_da_embalagem_em_cm": 2,
                "categorias": "shorts",
                "comprimento_da_embalagem_em_cm": 17,
                "capa": {
                  "childImageSharp": {
                    "fixed": {
                      "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQFAf/EABcBAQEBAQAAAAAAAAAAAAAAAAMAAQL/2gAMAwEAAhADEAAAAa3IubaRNs+wJaAxf//EABoQAAIDAQEAAAAAAAAAAAAAAAECAAMRISP/2gAIAQEAAQUCqHiigNLHCBWMufHUac5gLf/EABYRAAMAAAAAAAAAAAAAAAAAAAERIP/aAAgBAwEBPwFGP//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABwQAAICAgMAAAAAAAAAAAAAAAABETEQIQJRYf/aAAgBAQAGPwJPwcYibpI3bIN45T2f/8QAHBABAAMAAgMAAAAAAAAAAAAAAQARIRAxQVHw/9oACAEBAAE/IbC+a8EMKgYDEVoqtFJM96hu6eogVHUu/wAUT//aAAwDAQACAAMAAAAQDziB/8QAGREBAAIDAAAAAAAAAAAAAAAAAQARECEx/9oACAEDAQE/EFKR1LjzH//EABkRAAIDAQAAAAAAAAAAAAAAAAARARAxQf/aAAgBAgEBPxBw8Edr/8QAHRABAQACAwADAAAAAAAAAAAAAREAITFBcVFhgf/aAAgBAQABPxCwqqjymOQBC+5oCzRgULqOgnL9Y8o4VoaFZ3jxVgs/cvUHJepktB4PxxkuVJPMP//Z",
                      "width": 32,
                      "height": 32,
                      "src": "/static/25d090c8c21b5a125132c22a547b52c9/f20af/6da463abd58c15262f229f3e3786f640.jpg",
                      "srcSet": "/static/25d090c8c21b5a125132c22a547b52c9/f20af/6da463abd58c15262f229f3e3786f640.jpg 1x,\n/static/25d090c8c21b5a125132c22a547b52c9/344d0/6da463abd58c15262f229f3e3786f640.jpg 1.5x,\n/static/25d090c8c21b5a125132c22a547b52c9/8344c/6da463abd58c15262f229f3e3786f640.jpg 2x"
                    },
                    "secondaryFixed": {
                      "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAaABQDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAEEAwIF/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDAP/aAAwDAQACEAMQAAABvzfK60QT5s5XN2blZ//EAB4QAAICAQUBAAAAAAAAAAAAAAEDAAIxERMiIzJB/9oACAEBAAEFAl24rYTPix0i1RYnSMcJUWEcTuLycD1//8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8BpD//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwGFP//EAB0QAAEEAgMAAAAAAAAAAAAAAAEAEBEhAnExQWH/2gAIAQEABj8CGlBYTRh4xsnkrztUxWe1/8QAHRABAAICAgMAAAAAAAAAAAAAAQARITFBURBh8P/aAAgBAQABPyEVuix1tW3NahpKqmlTGFoQaj1LoaC04lWG1Fo1cTEGXgfD6J//2gAMAwEAAgADAAAAENgEjf/EABgRAQADAQAAAAAAAAAAAAAAAAEAETEQ/9oACAEDAQE/EEiFbLmOf//EABYRAQEBAAAAAAAAAAAAAAAAABEAEP/aAAgBAgEBPxBMTc//xAAhEAEAAgIBBAMBAAAAAAAAAAABABEhMWFRcYHwQaGxwf/aAAgBAQABPxBcDkOcREnJgAYo/a7R7OkozC1gfmvqZjjB70jWxSKsQQ0TRzLgHKAWa8Q/FiLvv+wNRvpPd4hG4HlD/9k=",
                      "width": 320,
                      "height": 420,
                      "src": "/static/25d090c8c21b5a125132c22a547b52c9/a8ae3/6da463abd58c15262f229f3e3786f640.jpg",
                      "srcSet": "/static/25d090c8c21b5a125132c22a547b52c9/a8ae3/6da463abd58c15262f229f3e3786f640.jpg 1x,\n/static/25d090c8c21b5a125132c22a547b52c9/3cd25/6da463abd58c15262f229f3e3786f640.jpg 1.5x,\n/static/25d090c8c21b5a125132c22a547b52c9/9596d/6da463abd58c15262f229f3e3786f640.jpg 2x"
                    }
                  }
                },
                "imagens": [
                  {
                    "localFile": {
                      "childImageSharp": {
                        "fixed": {
                          "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAED/9oADAMBAAIQAxAAAAGkgDrJSx2EqbCs/wD/xAAbEAEAAwEAAwAAAAAAAAAAAAABAgMREgAiM//aAAgBAQABBQKn5RDqxxs5hHp8ufcNkhga/wD/xAAXEQADAQAAAAAAAAAAAAAAAAABAhEg/9oACAEDAQE/AStNx//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABoQAAICAwAAAAAAAAAAAAAAAAABEBEhMYH/2gAIAQEABj8Cvg4rV6SMqzhmHZ//xAAeEAEAAgIBBQAAAAAAAAAAAAABABEhQWFRcYGhsf/aAAgBAQABPyHM9IxmUpziI9gdwmO0t6Y3iIe9RRBYGoDOHwn/2gAMAwEAAgADAAAAEHDPQP/EABgRAQADAQAAAAAAAAAAAAAAAAEAEBEx/9oACAEDAQE/EEAPJt//xAAZEQACAwEAAAAAAAAAAAAAAAAAARARMUH/2gAIAQIBAT8QbWFHY//EAB8QAQEAAgEEAwAAAAAAAAAAAAERACExQVGBkbHB0f/aAAgBAQABPxDXXaniz5xCoJwa23BAelwwT5t91woClkd7AcZBuB9X7whTFR4K47AD8YAlbi//2Q==",
                          "width": 32,
                          "height": 32,
                          "src": "/static/aaf5b33a52b2a6f92eadaacb2ddbe7fe/f20af/bac6ecda918c698dd68afaaa1c650339.jpg",
                          "srcSet": "/static/aaf5b33a52b2a6f92eadaacb2ddbe7fe/f20af/bac6ecda918c698dd68afaaa1c650339.jpg 1x,\n/static/aaf5b33a52b2a6f92eadaacb2ddbe7fe/344d0/bac6ecda918c698dd68afaaa1c650339.jpg 1.5x,\n/static/aaf5b33a52b2a6f92eadaacb2ddbe7fe/8344c/bac6ecda918c698dd68afaaa1c650339.jpg 2x",
                          "originalName": "bac6ecda918c698dd68afaaa1c650339.jpeg"
                        },
                        "secondaryFixed": {
                          "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAaABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEEAwL/xAAXAQEAAwAAAAAAAAAAAAAAAAACAAED/9oADAMBAAIQAxAAAAG/FFG0nIp5XYHybmg//8QAHBAAAgMAAwEAAAAAAAAAAAAAAQIAAxESITEy/9oACAEBAAEFAq21VY8tlXVIYA2tjW2rAGy3S6fR8Wf/xAAXEQADAQAAAAAAAAAAAAAAAAABEBEh/9oACAEDAQE/ASdUX//EABYRAQEBAAAAAAAAAAAAAAAAABEAEP/aAAgBAgEBPwEic//EABwQAAICAgMAAAAAAAAAAAAAAAEhABACESAxcf/aAAgBAQAGPwIeTLtmmjDuhpkxcDP/xAAfEAACAgICAwEAAAAAAAAAAAAAARExIUGBsVFhkaH/2gAIAQEAAT8hXzBHohsdDgXVgm/A7vogF6MIrzc6QjJrWZFbjSS/BFqdRbh0j//aAAwDAQACAAMAAAAQp9lw/8QAGREBAAIDAAAAAAAAAAAAAAAAAQAQESEx/9oACAEDAQE/EFABpmZxX//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPxCCtn//xAAiEAEAAgEDAwUAAAAAAAAAAAABABEhMUFRYZHBobHR4fD/2gAIAQEAAT8QW27quuPpgkpe4mchxdEGo7lxhqAClKnHvFuw4KXW99rlWcfM0bMnR80VVrgjZihmeiHzLDDbbqzW/NIBtLzF/9k=",
                          "width": 320,
                          "height": 420,
                          "src": "/static/aaf5b33a52b2a6f92eadaacb2ddbe7fe/a8ae3/bac6ecda918c698dd68afaaa1c650339.jpg",
                          "srcSet": "/static/aaf5b33a52b2a6f92eadaacb2ddbe7fe/a8ae3/bac6ecda918c698dd68afaaa1c650339.jpg 1x,\n/static/aaf5b33a52b2a6f92eadaacb2ddbe7fe/3cd25/bac6ecda918c698dd68afaaa1c650339.jpg 1.5x,\n/static/aaf5b33a52b2a6f92eadaacb2ddbe7fe/9596d/bac6ecda918c698dd68afaaa1c650339.jpg 2x"
                        }
                      }
                    }
                  },
                  {
                    "localFile": {
                      "childImageSharp": {
                        "fixed": {
                          "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAQCAwX/xAAXAQEBAQEAAAAAAAAAAAAAAAADAQAC/9oADAMBAAIQAxAAAAG7HXNzuwkWwUhJYGL/xAAcEAACAgIDAAAAAAAAAAAAAAABAgADERIhIzL/2gAIAQEAAQUCpHWvqWWBACSbGOyqNscpP//EABYRAAMAAAAAAAAAAAAAAAAAAAERIP/aAAgBAwEBPwFGP//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB0QAAICAQUAAAAAAAAAAAAAAAABAhBRESFBYXH/2gAIAQEABj8CjLolSy+ELOptcvT/xAAcEAEAAwADAQEAAAAAAAAAAAABABEhMUFRYaH/2gAIAQEAAT8hD7NQh+UDCUM3xdEzW1y82Er1IxLu1EA+JUI2fc//2gAMAwEAAgADAAAAEFzovf/EABkRAAIDAQAAAAAAAAAAAAAAAAARARAhMf/aAAgBAwEBPxDRvBk8r//EABgRAQADAQAAAAAAAAAAAAAAAAEAEBEx/9oACAECAQE/EFNmQ7X/xAAfEAEAAgEEAwEAAAAAAAAAAAABABEhMUFxwVGhsWH/2gAIAQEAAT8QYBusHGOoFeQbO2/wlBfkrFGAqBor7g1cIC4Jb5FhWEPOvZLVUZF2IhhnjMkVJa+rHU//2Q==",
                          "width": 32,
                          "height": 32,
                          "src": "/static/14819aad9b5aa08c9cdf8f7d8696c993/f20af/fec9cecff90c0ffff019fc6a1b4c5d0d.jpg",
                          "srcSet": "/static/14819aad9b5aa08c9cdf8f7d8696c993/f20af/fec9cecff90c0ffff019fc6a1b4c5d0d.jpg 1x,\n/static/14819aad9b5aa08c9cdf8f7d8696c993/344d0/fec9cecff90c0ffff019fc6a1b4c5d0d.jpg 1.5x,\n/static/14819aad9b5aa08c9cdf8f7d8696c993/8344c/fec9cecff90c0ffff019fc6a1b4c5d0d.jpg 2x",
                          "originalName": "fec9cecff90c0ffff019fc6a1b4c5d0d.jpeg"
                        },
                        "secondaryFixed": {
                          "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAaABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBAgQF/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDAP/aAAwDAQACEAMQAAAB3pcsbWADy6S9HaPKz//EABoQAAMBAQEBAAAAAAAAAAAAAAABAgMRITH/2gAIAQEAAQUCiurJ0Iz8zVJX4aaiT7adXH0zP//EABYRAQEBAAAAAAAAAAAAAAAAABARQf/aAAgBAwEBPwG4Q//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/AYU//8QAIBAAAQMDBQEAAAAAAAAAAAAAAQACEBEhQRIxUWFxgf/aAAgBAQAGPwL4tJvDa2NEe4DWb5KA5KNMIw71f//EAB4QAAMAAwACAwAAAAAAAAAAAAABESExQVGBobHB/9oACAEBAAE/IdGs5fAkq+TryaiyLGGmUB8FSUosnoLU4shyzgItXR79/p9k/9oADAMBAAIAAwAAABCDLY3/xAAXEQEBAQEAAAAAAAAAAAAAAAABEBEh/9oACAEDAQE/EMjHBP/EABgRAQADAQAAAAAAAAAAAAAAAAEAEBEx/9oACAECAQE/EFdmTS1//8QAHxABAAICAgIDAAAAAAAAAAAAAQARITFRcUHwgbHB/9oACAEBAAE/EDNwT2uxGq6ilgbMdVFvywuUED2oY0FxjzqJQqauGaUC9dHB3CCRKJa5E6iYkQ+dX+w1A38TE1x+k09eZ//Z",
                          "width": 320,
                          "height": 420,
                          "src": "/static/14819aad9b5aa08c9cdf8f7d8696c993/a8ae3/fec9cecff90c0ffff019fc6a1b4c5d0d.jpg",
                          "srcSet": "/static/14819aad9b5aa08c9cdf8f7d8696c993/a8ae3/fec9cecff90c0ffff019fc6a1b4c5d0d.jpg 1x,\n/static/14819aad9b5aa08c9cdf8f7d8696c993/3cd25/fec9cecff90c0ffff019fc6a1b4c5d0d.jpg 1.5x,\n/static/14819aad9b5aa08c9cdf8f7d8696c993/9596d/fec9cecff90c0ffff019fc6a1b4c5d0d.jpg 2x"
                        }
                      }
                    }
                  },
                  {
                    "localFile": {
                      "childImageSharp": {
                        "fixed": {
                          "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABYBAQEBAAAAAAAAAAAAAAAAAAMBAP/aAAwDAQACEAMQAAABvzzmk7CdrzaQ0sCn/8QAGhAAAgMBAQAAAAAAAAAAAAAAAQIAERIDMv/aAAgBAQABBQJPC1c6PhQSWfpkqLdhMgt//8QAFxEAAwEAAAAAAAAAAAAAAAAAERIgIf/aAAgBAwEBPwFdMf/EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAECAQE/AWP/xAAdEAACAQQDAAAAAAAAAAAAAAAAAVECEBFBEiGx/9oACAEBAAY/AuUoa3ZS9IXpg7tVmT//xAAdEAEBAAICAwEAAAAAAAAAAAABACFBEWExUYHw/9oACAEBAAE/ITgPdPskGIczUarcqvxw3H9I2coDxqEg/C//2gAMAwEAAgADAAAAEHswAv/EABkRAAIDAQAAAAAAAAAAAAAAAAARARAhQf/aAAgBAwEBPxBp0Gcr/8QAGREAAgMBAAAAAAAAAAAAAAAAAAEQETFB/9oACAECAQE/EGmFHY//xAAdEAEBAQACAgMAAAAAAAAAAAABEQAhQXGhMVGx/9oACAEBAAE/ECqUJ+YZFAKkXlOp70RO6+8SIY8AdFzWkeh+x+aUjZWZAVCAr1866icZHxqKEg8Rv//Z",
                          "width": 32,
                          "height": 32,
                          "src": "/static/853f6b06a825bdf9cf35eaceb296cd11/f20af/d78f7fbce51317ee28bba4b12f3151a5.jpg",
                          "srcSet": "/static/853f6b06a825bdf9cf35eaceb296cd11/f20af/d78f7fbce51317ee28bba4b12f3151a5.jpg 1x,\n/static/853f6b06a825bdf9cf35eaceb296cd11/344d0/d78f7fbce51317ee28bba4b12f3151a5.jpg 1.5x,\n/static/853f6b06a825bdf9cf35eaceb296cd11/8344c/d78f7fbce51317ee28bba4b12f3151a5.jpg 2x",
                          "originalName": "d78f7fbce51317ee28bba4b12f3151a5.jpeg"
                        },
                        "secondaryFixed": {
                          "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAaABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQX/xAAXAQEAAwAAAAAAAAAAAAAAAAACAAED/9oADAMBAAIQAxAAAAG5bU0bQIuWvKQ2lBoP/8QAHRAAAgICAwEAAAAAAAAAAAAAAQIAAxEyEiEiMf/aAAgBAQABBQI+0QtgRdA2GllkA7sZuSbNF+//xAAWEQEBAQAAAAAAAAAAAAAAAAARECH/2gAIAQMBAT8BdIT/xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwGFP//EABwQAAEEAwEAAAAAAAAAAAAAAAEAAhARITFBcf/aAAgBAQAGPwJwCo8gXusqjAazfSmqhLvV/8QAHRABAAIDAAMBAAAAAAAAAAAAAQARITFBYXGR8P/aAAgBAQABPyFaE6hGlmBOvcqaGpDTs4ZioYZT+EYsaLyMJVsCEvjs7n5/BP/aAAwDAQACAAMAAAAQ3NQy/8QAGREAAgMBAAAAAAAAAAAAAAAAAAEQETFh/9oACAEDAQE/EG/AsxH/xAAYEQACAwAAAAAAAAAAAAAAAAAAEBExUf/aAAgBAgEBPxDRBZf/xAAfEAEAAgICAwEBAAAAAAAAAAABESEAMUFRYcHwceH/2gAIAQEAAT8QRLMXGPqwgkGCVOxeccC7/jGuKomxjKZoENXV4EHE3jEsSe4Do/Ywu38ltyesqCIXzv2ZqbTjxhr71gGQHB//2Q==",
                          "width": 320,
                          "height": 420,
                          "src": "/static/853f6b06a825bdf9cf35eaceb296cd11/a8ae3/d78f7fbce51317ee28bba4b12f3151a5.jpg",
                          "srcSet": "/static/853f6b06a825bdf9cf35eaceb296cd11/a8ae3/d78f7fbce51317ee28bba4b12f3151a5.jpg 1x,\n/static/853f6b06a825bdf9cf35eaceb296cd11/3cd25/d78f7fbce51317ee28bba4b12f3151a5.jpg 1.5x,\n/static/853f6b06a825bdf9cf35eaceb296cd11/9596d/d78f7fbce51317ee28bba4b12f3151a5.jpg 2x"
                        }
                      }
                    }
                  }
                ]
              },
              "personalData": {
                "color": "azul",
                "size": "GG"
              }
            },
            {
              "item": {
                "cores_disponiveis": "azul\nverder\nrosa",
                "descricao": "Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.",
                "titulo": "Anuncio numero um, roupa muito top uhuu",
                "tamanhos_disponiveis": "P\nM\nG\nGG",
                "strapiId": 1,
                "preco_promocional": null,
                "preco_em_centavos": 8990,
                "peso_em_kg": 0.18,
                "marca": "Bonequim",
                "largura_da_embalagem_em_cm": 12,
                "altura_da_embalagem_em_cm": 2,
                "categorias": "shorts",
                "comprimento_da_embalagem_em_cm": 17,
                "capa": {
                  "childImageSharp": {
                    "fixed": {
                      "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQFAf/EABcBAQEBAQAAAAAAAAAAAAAAAAMAAQL/2gAMAwEAAhADEAAAAa3IubaRNs+wJaAxf//EABoQAAIDAQEAAAAAAAAAAAAAAAECAAMRISP/2gAIAQEAAQUCqHiigNLHCBWMufHUac5gLf/EABYRAAMAAAAAAAAAAAAAAAAAAAERIP/aAAgBAwEBPwFGP//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABwQAAICAgMAAAAAAAAAAAAAAAABETEQIQJRYf/aAAgBAQAGPwJPwcYibpI3bIN45T2f/8QAHBABAAMAAgMAAAAAAAAAAAAAAQARIRAxQVHw/9oACAEBAAE/IbC+a8EMKgYDEVoqtFJM96hu6eogVHUu/wAUT//aAAwDAQACAAMAAAAQDziB/8QAGREBAAIDAAAAAAAAAAAAAAAAAQARECEx/9oACAEDAQE/EFKR1LjzH//EABkRAAIDAQAAAAAAAAAAAAAAAAARARAxQf/aAAgBAgEBPxBw8Edr/8QAHRABAQACAwADAAAAAAAAAAAAAREAITFBcVFhgf/aAAgBAQABPxCwqqjymOQBC+5oCzRgULqOgnL9Y8o4VoaFZ3jxVgs/cvUHJepktB4PxxkuVJPMP//Z",
                      "width": 32,
                      "height": 32,
                      "src": "/static/25d090c8c21b5a125132c22a547b52c9/f20af/6da463abd58c15262f229f3e3786f640.jpg",
                      "srcSet": "/static/25d090c8c21b5a125132c22a547b52c9/f20af/6da463abd58c15262f229f3e3786f640.jpg 1x,\n/static/25d090c8c21b5a125132c22a547b52c9/344d0/6da463abd58c15262f229f3e3786f640.jpg 1.5x,\n/static/25d090c8c21b5a125132c22a547b52c9/8344c/6da463abd58c15262f229f3e3786f640.jpg 2x"
                    },
                    "secondaryFixed": {
                      "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAaABQDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAEEAwIF/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDAP/aAAwDAQACEAMQAAABvzfK60QT5s5XN2blZ//EAB4QAAICAQUBAAAAAAAAAAAAAAEDAAIxERMiIzJB/9oACAEBAAEFAl24rYTPix0i1RYnSMcJUWEcTuLycD1//8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8BpD//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwGFP//EAB0QAAEEAgMAAAAAAAAAAAAAAAEAEBEhAnExQWH/2gAIAQEABj8CGlBYTRh4xsnkrztUxWe1/8QAHRABAAICAgMAAAAAAAAAAAAAAQARITFBURBh8P/aAAgBAQABPyEVuix1tW3NahpKqmlTGFoQaj1LoaC04lWG1Fo1cTEGXgfD6J//2gAMAwEAAgADAAAAENgEjf/EABgRAQADAQAAAAAAAAAAAAAAAAEAETEQ/9oACAEDAQE/EEiFbLmOf//EABYRAQEBAAAAAAAAAAAAAAAAABEAEP/aAAgBAgEBPxBMTc//xAAhEAEAAgIBBAMBAAAAAAAAAAABABEhMWFRcYHwQaGxwf/aAAgBAQABPxBcDkOcREnJgAYo/a7R7OkozC1gfmvqZjjB70jWxSKsQQ0TRzLgHKAWa8Q/FiLvv+wNRvpPd4hG4HlD/9k=",
                      "width": 320,
                      "height": 420,
                      "src": "/static/25d090c8c21b5a125132c22a547b52c9/a8ae3/6da463abd58c15262f229f3e3786f640.jpg",
                      "srcSet": "/static/25d090c8c21b5a125132c22a547b52c9/a8ae3/6da463abd58c15262f229f3e3786f640.jpg 1x,\n/static/25d090c8c21b5a125132c22a547b52c9/3cd25/6da463abd58c15262f229f3e3786f640.jpg 1.5x,\n/static/25d090c8c21b5a125132c22a547b52c9/9596d/6da463abd58c15262f229f3e3786f640.jpg 2x"
                    }
                  }
                },
                "imagens": [
                  {
                    "localFile": {
                      "childImageSharp": {
                        "fixed": {
                          "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABUBAQEAAAAAAAAAAAAAAAAAAAED/9oADAMBAAIQAxAAAAGkgDrJSx2EqbCs/wD/xAAbEAEAAwEAAwAAAAAAAAAAAAABAgMREgAiM//aAAgBAQABBQKn5RDqxxs5hHp8ufcNkhga/wD/xAAXEQADAQAAAAAAAAAAAAAAAAABAhEg/9oACAEDAQE/AStNx//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABoQAAICAwAAAAAAAAAAAAAAAAABEBEhMYH/2gAIAQEABj8Cvg4rV6SMqzhmHZ//xAAeEAEAAgIBBQAAAAAAAAAAAAABABEhQWFRcYGhsf/aAAgBAQABPyHM9IxmUpziI9gdwmO0t6Y3iIe9RRBYGoDOHwn/2gAMAwEAAgADAAAAEHDPQP/EABgRAQADAQAAAAAAAAAAAAAAAAEAEBEx/9oACAEDAQE/EEAPJt//xAAZEQACAwEAAAAAAAAAAAAAAAAAARARMUH/2gAIAQIBAT8QbWFHY//EAB8QAQEAAgEEAwAAAAAAAAAAAAERACExQVGBkbHB0f/aAAgBAQABPxDXXaniz5xCoJwa23BAelwwT5t91woClkd7AcZBuB9X7whTFR4K47AD8YAlbi//2Q==",
                          "width": 32,
                          "height": 32,
                          "src": "/static/aaf5b33a52b2a6f92eadaacb2ddbe7fe/f20af/bac6ecda918c698dd68afaaa1c650339.jpg",
                          "srcSet": "/static/aaf5b33a52b2a6f92eadaacb2ddbe7fe/f20af/bac6ecda918c698dd68afaaa1c650339.jpg 1x,\n/static/aaf5b33a52b2a6f92eadaacb2ddbe7fe/344d0/bac6ecda918c698dd68afaaa1c650339.jpg 1.5x,\n/static/aaf5b33a52b2a6f92eadaacb2ddbe7fe/8344c/bac6ecda918c698dd68afaaa1c650339.jpg 2x",
                          "originalName": "bac6ecda918c698dd68afaaa1c650339.jpeg"
                        },
                        "secondaryFixed": {
                          "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAaABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAEEAwL/xAAXAQEAAwAAAAAAAAAAAAAAAAACAAED/9oADAMBAAIQAxAAAAG/FFG0nIp5XYHybmg//8QAHBAAAgMAAwEAAAAAAAAAAAAAAQIAAxESITEy/9oACAEBAAEFAq21VY8tlXVIYA2tjW2rAGy3S6fR8Wf/xAAXEQADAQAAAAAAAAAAAAAAAAABEBEh/9oACAEDAQE/ASdUX//EABYRAQEBAAAAAAAAAAAAAAAAABEAEP/aAAgBAgEBPwEic//EABwQAAICAgMAAAAAAAAAAAAAAAEhABACESAxcf/aAAgBAQAGPwIeTLtmmjDuhpkxcDP/xAAfEAACAgICAwEAAAAAAAAAAAAAARExIUGBsVFhkaH/2gAIAQEAAT8hXzBHohsdDgXVgm/A7vogF6MIrzc6QjJrWZFbjSS/BFqdRbh0j//aAAwDAQACAAMAAAAQp9lw/8QAGREBAAIDAAAAAAAAAAAAAAAAAQAQESEx/9oACAEDAQE/EFABpmZxX//EABYRAQEBAAAAAAAAAAAAAAAAAAEQEf/aAAgBAgEBPxCCtn//xAAiEAEAAgEDAwUAAAAAAAAAAAABABEhMUFRYZHBobHR4fD/2gAIAQEAAT8QW27quuPpgkpe4mchxdEGo7lxhqAClKnHvFuw4KXW99rlWcfM0bMnR80VVrgjZihmeiHzLDDbbqzW/NIBtLzF/9k=",
                          "width": 320,
                          "height": 420,
                          "src": "/static/aaf5b33a52b2a6f92eadaacb2ddbe7fe/a8ae3/bac6ecda918c698dd68afaaa1c650339.jpg",
                          "srcSet": "/static/aaf5b33a52b2a6f92eadaacb2ddbe7fe/a8ae3/bac6ecda918c698dd68afaaa1c650339.jpg 1x,\n/static/aaf5b33a52b2a6f92eadaacb2ddbe7fe/3cd25/bac6ecda918c698dd68afaaa1c650339.jpg 1.5x,\n/static/aaf5b33a52b2a6f92eadaacb2ddbe7fe/9596d/bac6ecda918c698dd68afaaa1c650339.jpg 2x"
                        }
                      }
                    }
                  },
                  {
                    "localFile": {
                      "childImageSharp": {
                        "fixed": {
                          "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAAAAQCAwX/xAAXAQEBAQEAAAAAAAAAAAAAAAADAQAC/9oADAMBAAIQAxAAAAG7HXNzuwkWwUhJYGL/xAAcEAACAgIDAAAAAAAAAAAAAAABAgADERIhIzL/2gAIAQEAAQUCpHWvqWWBACSbGOyqNscpP//EABYRAAMAAAAAAAAAAAAAAAAAAAERIP/aAAgBAwEBPwFGP//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB0QAAICAQUAAAAAAAAAAAAAAAABAhBRESFBYXH/2gAIAQEABj8CjLolSy+ELOptcvT/xAAcEAEAAwADAQEAAAAAAAAAAAABABEhMUFRYaH/2gAIAQEAAT8hD7NQh+UDCUM3xdEzW1y82Er1IxLu1EA+JUI2fc//2gAMAwEAAgADAAAAEFzovf/EABkRAAIDAQAAAAAAAAAAAAAAAAARARAhMf/aAAgBAwEBPxDRvBk8r//EABgRAQADAQAAAAAAAAAAAAAAAAEAEBEx/9oACAECAQE/EFNmQ7X/xAAfEAEAAgEEAwEAAAAAAAAAAAABABEhMUFxwVGhsWH/2gAIAQEAAT8QYBusHGOoFeQbO2/wlBfkrFGAqBor7g1cIC4Jb5FhWEPOvZLVUZF2IhhnjMkVJa+rHU//2Q==",
                          "width": 32,
                          "height": 32,
                          "src": "/static/14819aad9b5aa08c9cdf8f7d8696c993/f20af/fec9cecff90c0ffff019fc6a1b4c5d0d.jpg",
                          "srcSet": "/static/14819aad9b5aa08c9cdf8f7d8696c993/f20af/fec9cecff90c0ffff019fc6a1b4c5d0d.jpg 1x,\n/static/14819aad9b5aa08c9cdf8f7d8696c993/344d0/fec9cecff90c0ffff019fc6a1b4c5d0d.jpg 1.5x,\n/static/14819aad9b5aa08c9cdf8f7d8696c993/8344c/fec9cecff90c0ffff019fc6a1b4c5d0d.jpg 2x",
                          "originalName": "fec9cecff90c0ffff019fc6a1b4c5d0d.jpeg"
                        },
                        "secondaryFixed": {
                          "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAaABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAMBAgQF/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDAP/aAAwDAQACEAMQAAAB3pcsbWADy6S9HaPKz//EABoQAAMBAQEBAAAAAAAAAAAAAAABAgMRITH/2gAIAQEAAQUCiurJ0Iz8zVJX4aaiT7adXH0zP//EABYRAQEBAAAAAAAAAAAAAAAAABARQf/aAAgBAwEBPwG4Q//EABURAQEAAAAAAAAAAAAAAAAAABAR/9oACAECAQE/AYU//8QAIBAAAQMDBQEAAAAAAAAAAAAAAQACEBEhQRIxUWFxgf/aAAgBAQAGPwL4tJvDa2NEe4DWb5KA5KNMIw71f//EAB4QAAMAAwACAwAAAAAAAAAAAAABESExQVGBobHB/9oACAEBAAE/IdGs5fAkq+TryaiyLGGmUB8FSUosnoLU4shyzgItXR79/p9k/9oADAMBAAIAAwAAABCDLY3/xAAXEQEBAQEAAAAAAAAAAAAAAAABEBEh/9oACAEDAQE/EMjHBP/EABgRAQADAQAAAAAAAAAAAAAAAAEAEBEx/9oACAECAQE/EFdmTS1//8QAHxABAAICAgIDAAAAAAAAAAAAAQARITFRcUHwgbHB/9oACAEBAAE/EDNwT2uxGq6ilgbMdVFvywuUED2oY0FxjzqJQqauGaUC9dHB3CCRKJa5E6iYkQ+dX+w1A38TE1x+k09eZ//Z",
                          "width": 320,
                          "height": 420,
                          "src": "/static/14819aad9b5aa08c9cdf8f7d8696c993/a8ae3/fec9cecff90c0ffff019fc6a1b4c5d0d.jpg",
                          "srcSet": "/static/14819aad9b5aa08c9cdf8f7d8696c993/a8ae3/fec9cecff90c0ffff019fc6a1b4c5d0d.jpg 1x,\n/static/14819aad9b5aa08c9cdf8f7d8696c993/3cd25/fec9cecff90c0ffff019fc6a1b4c5d0d.jpg 1.5x,\n/static/14819aad9b5aa08c9cdf8f7d8696c993/9596d/fec9cecff90c0ffff019fc6a1b4c5d0d.jpg 2x"
                        }
                      }
                    }
                  },
                  {
                    "localFile": {
                      "childImageSharp": {
                        "fixed": {
                          "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABYBAQEBAAAAAAAAAAAAAAAAAAMBAP/aAAwDAQACEAMQAAABvzzmk7CdrzaQ0sCn/8QAGhAAAgMBAQAAAAAAAAAAAAAAAQIAERIDMv/aAAgBAQABBQJPC1c6PhQSWfpkqLdhMgt//8QAFxEAAwEAAAAAAAAAAAAAAAAAERIgIf/aAAgBAwEBPwFdMf/EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAECAQE/AWP/xAAdEAACAQQDAAAAAAAAAAAAAAAAAVECEBFBEiGx/9oACAEBAAY/AuUoa3ZS9IXpg7tVmT//xAAdEAEBAAICAwEAAAAAAAAAAAABACFBEWExUYHw/9oACAEBAAE/ITgPdPskGIczUarcqvxw3H9I2coDxqEg/C//2gAMAwEAAgADAAAAEHswAv/EABkRAAIDAQAAAAAAAAAAAAAAAAARARAhQf/aAAgBAwEBPxBp0Gcr/8QAGREAAgMBAAAAAAAAAAAAAAAAAAEQETFB/9oACAECAQE/EGmFHY//xAAdEAEBAQACAgMAAAAAAAAAAAABEQAhQXGhMVGx/9oACAEBAAE/ECqUJ+YZFAKkXlOp70RO6+8SIY8AdFzWkeh+x+aUjZWZAVCAr1866icZHxqKEg8Rv//Z",
                          "width": 32,
                          "height": 32,
                          "src": "/static/853f6b06a825bdf9cf35eaceb296cd11/f20af/d78f7fbce51317ee28bba4b12f3151a5.jpg",
                          "srcSet": "/static/853f6b06a825bdf9cf35eaceb296cd11/f20af/d78f7fbce51317ee28bba4b12f3151a5.jpg 1x,\n/static/853f6b06a825bdf9cf35eaceb296cd11/344d0/d78f7fbce51317ee28bba4b12f3151a5.jpg 1.5x,\n/static/853f6b06a825bdf9cf35eaceb296cd11/8344c/d78f7fbce51317ee28bba4b12f3151a5.jpg 2x",
                          "originalName": "d78f7fbce51317ee28bba4b12f3151a5.jpeg"
                        },
                        "secondaryFixed": {
                          "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAaABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAMEAQX/xAAXAQEAAwAAAAAAAAAAAAAAAAACAAED/9oADAMBAAIQAxAAAAG5bU0bQIuWvKQ2lBoP/8QAHRAAAgICAwEAAAAAAAAAAAAAAQIAAxEyEiEiMf/aAAgBAQABBQI+0QtgRdA2GllkA7sZuSbNF+//xAAWEQEBAQAAAAAAAAAAAAAAAAARECH/2gAIAQMBAT8BdIT/xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwGFP//EABwQAAEEAwEAAAAAAAAAAAAAAAEAAhARITFBcf/aAAgBAQAGPwJwCo8gXusqjAazfSmqhLvV/8QAHRABAAIDAAMBAAAAAAAAAAAAAQARITFBYXGR8P/aAAgBAQABPyFaE6hGlmBOvcqaGpDTs4ZioYZT+EYsaLyMJVsCEvjs7n5/BP/aAAwDAQACAAMAAAAQ3NQy/8QAGREAAgMBAAAAAAAAAAAAAAAAAAEQETFh/9oACAEDAQE/EG/AsxH/xAAYEQACAwAAAAAAAAAAAAAAAAAAEBExUf/aAAgBAgEBPxDRBZf/xAAfEAEAAgICAwEBAAAAAAAAAAABESEAMUFRYcHwceH/2gAIAQEAAT8QRLMXGPqwgkGCVOxeccC7/jGuKomxjKZoENXV4EHE3jEsSe4Do/Ywu38ltyesqCIXzv2ZqbTjxhr71gGQHB//2Q==",
                          "width": 320,
                          "height": 420,
                          "src": "/static/853f6b06a825bdf9cf35eaceb296cd11/a8ae3/d78f7fbce51317ee28bba4b12f3151a5.jpg",
                          "srcSet": "/static/853f6b06a825bdf9cf35eaceb296cd11/a8ae3/d78f7fbce51317ee28bba4b12f3151a5.jpg 1x,\n/static/853f6b06a825bdf9cf35eaceb296cd11/3cd25/d78f7fbce51317ee28bba4b12f3151a5.jpg 1.5x,\n/static/853f6b06a825bdf9cf35eaceb296cd11/9596d/d78f7fbce51317ee28bba4b12f3151a5.jpg 2x"
                        }
                      }
                    }
                  }
                ]
              },
              "personalData": {
                "color": "verder",
                "size": "G"
              }
            },
            {
              "item": {
                "cores_disponiveis": "rosa\nverde\ncinza",
                "descricao": "- Lorem ipsum dolor sit amet, consectetuer adipiscing elit\n- Aliquam tincidunt mauris eu risus.\n- Vestibulum auctor dapibus neque.\n- Nunc dignissim risus id metus.",
                "titulo": "Anuncio número dois, bem descritivo, blablabla",
                "tamanhos_disponiveis": "P\nM\nG\nGG",
                "strapiId": 2,
                "preco_promocional": 18000,
                "preco_em_centavos": 20000,
                "peso_em_kg": 0.18,
                "marca": "Rio 40 graus",
                "largura_da_embalagem_em_cm": 12,
                "altura_da_embalagem_em_cm": 2,
                "categorias": "Calças",
                "comprimento_da_embalagem_em_cm": 17,
                "capa": {
                  "childImageSharp": {
                    "fixed": {
                      "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIEBQP/xAAWAQEBAQAAAAAAAAAAAAAAAAADAQL/2gAMAwEAAhADEAAAAdTlGtlNUU6lAjbY0P8A/8QAHBAAAgICAwAAAAAAAAAAAAAAAQMAAhIzBBAh/9oACAEBAAEFAhYYrZlBKaOKfYzWo9f/xAAYEQADAQEAAAAAAAAAAAAAAAABAhARMv/aAAgBAwEBPwFV1SYvJn//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAZEAACAwEAAAAAAAAAAAAAAAABEQACEGH/2gAIAQEABj8CfIiXbHyWyxhz/8QAHRAAAgIDAAMAAAAAAAAAAAAAAAERITFBURBhgf/aAAgBAQABPyG4PpkDcJjRgQat6sRf2ULCPmIoqsLx/9oADAMBAAIAAwAAABAf/wAA/8QAGBEAAgMAAAAAAAAAAAAAAAAAARBRgfD/2gAIAQMBAT8QDCral//EABgRAAIDAAAAAAAAAAAAAAAAAAARARBB/9oACAECAQE/EFLEbX//xAAcEAEAAwACAwAAAAAAAAAAAAABABEhMUFRcZH/2gAIAQEAAT8QqSABn0QwNZgAo4MprysKcC2HjIsgChHL5yD5R0LHA6jao0CmlVUusn//2Q==",
                      "width": 32,
                      "height": 32,
                      "src": "/static/13dd49e6926d1983a14edb9c3a6e0b35/f20af/807defa879528a3e74d116b532554a5b.jpg",
                      "srcSet": "/static/13dd49e6926d1983a14edb9c3a6e0b35/f20af/807defa879528a3e74d116b532554a5b.jpg 1x,\n/static/13dd49e6926d1983a14edb9c3a6e0b35/344d0/807defa879528a3e74d116b532554a5b.jpg 1.5x,\n/static/13dd49e6926d1983a14edb9c3a6e0b35/8344c/807defa879528a3e74d116b532554a5b.jpg 2x"
                    },
                    "secondaryFixed": {
                      "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAaABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBAgUD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIB/9oADAMBAAIQAxAAAAHU5VWlNUDTRTl2FZEBC//EAB4QAAIBBAMBAAAAAAAAAAAAAAECAAMEEjMRIUFC/9oACAEBAAEFAgwxp1MoImi1PcruFCciFws+/LjZ/8QAGBEAAwEBAAAAAAAAAAAAAAAAAQIQETH/2gAIAQMBAT8BVdUmcGT/xAAVEQEBAAAAAAAAAAAAAAAAAAAQEv/aAAgBAgEBPwEo/8QAGxAAAgIDAQAAAAAAAAAAAAAAAREAEAIxYYH/2gAIAQEABj8CfIiXlT5MqWyZpujXk//EABwQAQACAgMBAAAAAAAAAAAAAAEAEUFRECExYf/aAAgBAQABPyHuDsyhmF1ieJRK+WB37sh4RIXSMRPWIXqMUz26PAf/2gAMAwEAAgADAAAAEB/yDP/EABcRAAMBAAAAAAAAAAAAAAAAAAEQEVH/2gAIAQMBAT8QDiq3Bf/EABcRAQEBAQAAAAAAAAAAAAAAABEBABD/2gAIAQIBAT8QK40V5//EAB4QAQADAQABBQAAAAAAAAAAAAEAESExcVFhkbHB/9oACAEBAAE/EKkgAZ8EMDWYAKODKa9VhTgWw8yLIAoRy+5B8UrKLOQrrGSOJ7NVD7lpew1abNfEIOg4fk5+H2z/2Q==",
                      "width": 320,
                      "height": 420,
                      "src": "/static/13dd49e6926d1983a14edb9c3a6e0b35/a8ae3/807defa879528a3e74d116b532554a5b.jpg",
                      "srcSet": "/static/13dd49e6926d1983a14edb9c3a6e0b35/a8ae3/807defa879528a3e74d116b532554a5b.jpg 1x,\n/static/13dd49e6926d1983a14edb9c3a6e0b35/3cd25/807defa879528a3e74d116b532554a5b.jpg 1.5x,\n/static/13dd49e6926d1983a14edb9c3a6e0b35/9596d/807defa879528a3e74d116b532554a5b.jpg 2x"
                    }
                  }
                },
                "imagens": [
                  {
                    "localFile": {
                      "childImageSharp": {
                        "fixed": {
                          "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAIFBP/EABYBAQEBAAAAAAAAAAAAAAAAAAABA//aAAwDAQACEAMQAAAB2eXrzZrqpMpkWgn/xAAeEAABAwQDAAAAAAAAAAAAAAABAAIRAwQSEyIxMv/aAAgBAQABBQInEUHy5Hq3nan+I5r/xAAXEQEBAQEAAAAAAAAAAAAAAAABAhBB/9oACAEDAQE/AYBlzmf/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAZEAADAAMAAAAAAAAAAAAAAAABEBEAYXH/2gAIAQEABj8CuGvRZ4v/xAAbEAEBAAIDAQAAAAAAAAAAAAABEQAhEDFBkf/aAAgBAQABPyGzFnmMVLd8RV6xF6QHLmq+YAA8HH//2gAMAwEAAgADAAAAEKAgPv/EABgRAQEAAwAAAAAAAAAAAAAAAAEQMZHw/9oACAEDAQE/EFNyQ5qf/8QAFhEAAwAAAAAAAAAAAAAAAAAAARAx/9oACAECAQE/EDUav//EAB0QAQEAAAcBAAAAAAAAAAAAAAERABAhMVFhcZH/2gAIAQEAAT8QNdA2N3rCQAnMGt83PmRUtBdOsMN9RGb6ZEwssr1mCQgIOCuX/9k=",
                          "width": 32,
                          "height": 32,
                          "src": "/static/4f7c7401b2d49895b8f5cc577313e193/f20af/aabd87fd096e1289af8a7619ecfa9ca6.jpg",
                          "srcSet": "/static/4f7c7401b2d49895b8f5cc577313e193/f20af/aabd87fd096e1289af8a7619ecfa9ca6.jpg 1x,\n/static/4f7c7401b2d49895b8f5cc577313e193/344d0/aabd87fd096e1289af8a7619ecfa9ca6.jpg 1.5x,\n/static/4f7c7401b2d49895b8f5cc577313e193/8344c/aabd87fd096e1289af8a7619ecfa9ca6.jpg 2x",
                          "originalName": "aabd87fd096e1289af8a7619ecfa9ca6.jpeg"
                        },
                        "secondaryFixed": {
                          "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAaABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAIFBAH/xAAXAQADAQAAAAAAAAAAAAAAAAAAAQMC/9oADAMBAAIQAxAAAAGzl1zVWqKElV+DBh5//8QAHhAAAgEDBQAAAAAAAAAAAAAAAAECETFBAwQSEyL/2gAIAQEAAQUCb4rQnWQ7bevaSsl6M5P/xAAWEQEBAQAAAAAAAAAAAAAAAAABAiD/2gAIAQMBAT8BgGXH/8QAFBEBAAAAAAAAAAAAAAAAAAAAIP/aAAgBAgEBPwEf/8QAGhAAAgIDAAAAAAAAAAAAAAAAARAAEVFhcf/aAAgBAQAGPwK4beiqzDxCFf/EABoQAQEBAAMBAAAAAAAAAAAAAAERABAhMUH/2gAIAQEAAT8hsxZ8zFS3viKvmRfSA662XvTRl4A4dHF//9oADAMBAAIAAwAAABCgLT3/xAAXEQEBAQEAAAAAAAAAAAAAAAABEDFB/9oACAEDAQE/EFN0nJ//xAAXEQEAAwAAAAAAAAAAAAAAAAAQATFB/9oACAECAQE/EJs0/8QAHxABAAECBwEAAAAAAAAAAAAAAREAIRAxUWFxkaFB/9oACAEBAAE/EDXQMwzdqSAE1gyzxmdYFRZBNtqYZ9QjGdsAkMJdofXqgiIBe4eZq8+Kiv/Z",
                          "width": 320,
                          "height": 420,
                          "src": "/static/4f7c7401b2d49895b8f5cc577313e193/a8ae3/aabd87fd096e1289af8a7619ecfa9ca6.jpg",
                          "srcSet": "/static/4f7c7401b2d49895b8f5cc577313e193/a8ae3/aabd87fd096e1289af8a7619ecfa9ca6.jpg 1x,\n/static/4f7c7401b2d49895b8f5cc577313e193/3cd25/aabd87fd096e1289af8a7619ecfa9ca6.jpg 1.5x,\n/static/4f7c7401b2d49895b8f5cc577313e193/9596d/aabd87fd096e1289af8a7619ecfa9ca6.jpg 2x"
                        }
                      }
                    }
                  },
                  {
                    "localFile": {
                      "childImageSharp": {
                        "fixed": {
                          "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQDBf/EABYBAQEBAAAAAAAAAAAAAAAAAAMAAf/aAAwDAQACEAMQAAABtxR4vcYIuTUGloU//8QAHhAAAQMEAwAAAAAAAAAAAAAAAgEDEgAEEyERIjL/2gAIAQEAAQUC1itlTHT5QFn0bkVHsXG4oRf/xAAWEQADAAAAAAAAAAAAAAAAAAABIDP/2gAIAQMBAT8BE0//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAcEAACAgIDAAAAAAAAAAAAAAABEQBBAhAhMVH/2gAIAQEABj8CyNEOK9KzUAV9xTnWT9n/xAAcEAEAAwACAwAAAAAAAAAAAAABABFBIWExUaH/2gAIAQEAAT8hQSI1DXMDggrfEGRJth6Sm6QWvLIgseyCEX4fJ//aAAwDAQACAAMAAAAQL9BC/8QAGREAAgMBAAAAAAAAAAAAAAAAABEBEDFR/9oACAEDAQE/ENH0ZOV//8QAGBEAAwEBAAAAAAAAAAAAAAAAAAEREDH/2gAIAQIBAT8QcILuf//EAB0QAQACAQUBAAAAAAAAAAAAAAEAESExQVFxkfH/2gAIAQEAAT8QztU07LlFJaBc/NY2Li5X0i6OKy9QcFKRw28hZ3SsO0ooXwTecUekuhCrqk//2Q==",
                          "width": 32,
                          "height": 32,
                          "src": "/static/ac58508a2907dd41a0edee3b4b7727ba/f20af/c3fbc520af3183e283f15d880ac5e184.jpg",
                          "srcSet": "/static/ac58508a2907dd41a0edee3b4b7727ba/f20af/c3fbc520af3183e283f15d880ac5e184.jpg 1x,\n/static/ac58508a2907dd41a0edee3b4b7727ba/344d0/c3fbc520af3183e283f15d880ac5e184.jpg 1.5x,\n/static/ac58508a2907dd41a0edee3b4b7727ba/8344c/c3fbc520af3183e283f15d880ac5e184.jpg 2x",
                          "originalName": "c3fbc520af3183e283f15d880ac5e184.jpeg"
                        },
                        "secondaryFixed": {
                          "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAaABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBAwUC/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwEC/9oADAMBAAIQAxAAAAFyOlommSTGTTDWUYLhC//EAB0QAAICAQUAAAAAAAAAAAAAAAECAAMiBBIhMTL/2gAIAQEAAQUCfOmp9yiHinTvhL7JWCHsYhk9GL3/AP/EABgRAAMBAQAAAAAAAAAAAAAAAAEQESJB/9oACAEDAQE/AQMVci//xAAVEQEBAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwGFP//EAB4QAAEDBQEBAAAAAAAAAAAAAAEAAhAREiExQVFx/9oACAEBAAY/AnrdRBPaK0+xazuyhnCoJd9X/8QAHBABAAICAwEAAAAAAAAAAAAAAQARITFBYYHw/9oACAEBAAE/IWAyVEsKIVjU0jKClmdw9jgNQMEF5k+ELGlhSVx0TdNp8/RP/9oADAMBAAIAAwAAABDwKID/xAAXEQADAQAAAAAAAAAAAAAAAAABEBFh/9oACAEDAQE/EAEtqxX/xAAXEQEBAQEAAAAAAAAAAAAAAAABABEQ/9oACAECAQE/EHFkNef/xAAhEAEAAgMAAQQDAAAAAAAAAAABABEhMUFRYXGBkaGxwf/aAAgBAQABPxDWQZDeHJ+I2AG1KCkfnMxve1jiCq+ymb9ZjEVyDfL8wt3IFlvG4ue7LcCx2vH7lpCENed/0hG8vMIJMNn7IRVByh//2Q==",
                          "width": 320,
                          "height": 420,
                          "src": "/static/ac58508a2907dd41a0edee3b4b7727ba/a8ae3/c3fbc520af3183e283f15d880ac5e184.jpg",
                          "srcSet": "/static/ac58508a2907dd41a0edee3b4b7727ba/a8ae3/c3fbc520af3183e283f15d880ac5e184.jpg 1x,\n/static/ac58508a2907dd41a0edee3b4b7727ba/3cd25/c3fbc520af3183e283f15d880ac5e184.jpg 1.5x,\n/static/ac58508a2907dd41a0edee3b4b7727ba/9596d/c3fbc520af3183e283f15d880ac5e184.jpg 2x"
                        }
                      }
                    }
                  },
                  {
                    "localFile": {
                      "childImageSharp": {
                        "fixed": {
                          "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIEBQP/xAAWAQEBAQAAAAAAAAAAAAAAAAADAQL/2gAMAwEAAhADEAAAAdTlGtlNUU6lAjbY0P8A/8QAHBAAAgICAwAAAAAAAAAAAAAAAQMAAhIzBBAh/9oACAEBAAEFAhYYrZlBKaOKfYzWo9f/xAAYEQADAQEAAAAAAAAAAAAAAAABAhARMv/aAAgBAwEBPwFV1SYvJn//xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAZEAACAwEAAAAAAAAAAAAAAAABEQACEGH/2gAIAQEABj8CfIiXbHyWyxhz/8QAHRAAAgIDAAMAAAAAAAAAAAAAAAERITFBURBhgf/aAAgBAQABPyG4PpkDcJjRgQat6sRf2ULCPmIoqsLx/9oADAMBAAIAAwAAABAf/wAA/8QAGBEAAgMAAAAAAAAAAAAAAAAAARBRgfD/2gAIAQMBAT8QDCral//EABgRAAIDAAAAAAAAAAAAAAAAAAARARBB/9oACAECAQE/EFLEbX//xAAcEAEAAwACAwAAAAAAAAAAAAABABEhMUFRcZH/2gAIAQEAAT8QqSABn0QwNZgAo4MprysKcC2HjIsgChHL5yD5R0LHA6jao0CmlVUusn//2Q==",
                          "width": 32,
                          "height": 32,
                          "src": "/static/13dd49e6926d1983a14edb9c3a6e0b35/f20af/807defa879528a3e74d116b532554a5b.jpg",
                          "srcSet": "/static/13dd49e6926d1983a14edb9c3a6e0b35/f20af/807defa879528a3e74d116b532554a5b.jpg 1x,\n/static/13dd49e6926d1983a14edb9c3a6e0b35/344d0/807defa879528a3e74d116b532554a5b.jpg 1.5x,\n/static/13dd49e6926d1983a14edb9c3a6e0b35/8344c/807defa879528a3e74d116b532554a5b.jpg 2x",
                          "originalName": "807defa879528a3e74d116b532554a5b.jpeg"
                        },
                        "secondaryFixed": {
                          "base64": "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAaABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAQBAgUD/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIB/9oADAMBAAIQAxAAAAHU5VWlNUDTRTl2FZEBC//EAB4QAAIBBAMBAAAAAAAAAAAAAAECAAMEEjMRIUFC/9oACAEBAAEFAgwxp1MoImi1PcruFCciFws+/LjZ/8QAGBEAAwEBAAAAAAAAAAAAAAAAAQIQETH/2gAIAQMBAT8BVdUmcGT/xAAVEQEBAAAAAAAAAAAAAAAAAAAQEv/aAAgBAgEBPwEo/8QAGxAAAgIDAQAAAAAAAAAAAAAAAREAEAIxYYH/2gAIAQEABj8CfIiXlT5MqWyZpujXk//EABwQAQACAgMBAAAAAAAAAAAAAAEAEUFRECExYf/aAAgBAQABPyHuDsyhmF1ieJRK+WB37sh4RIXSMRPWIXqMUz26PAf/2gAMAwEAAgADAAAAEB/yDP/EABcRAAMBAAAAAAAAAAAAAAAAAAEQEVH/2gAIAQMBAT8QDiq3Bf/EABcRAQEBAQAAAAAAAAAAAAAAABEBABD/2gAIAQIBAT8QK40V5//EAB4QAQADAQABBQAAAAAAAAAAAAEAESExcVFhkbHB/9oACAEBAAE/EKkgAZ8EMDWYAKODKa9VhTgWw8yLIAoRy+5B8UrKLOQrrGSOJ7NVD7lpew1abNfEIOg4fk5+H2z/2Q==",
                          "width": 320,
                          "height": 420,
                          "src": "/static/13dd49e6926d1983a14edb9c3a6e0b35/a8ae3/807defa879528a3e74d116b532554a5b.jpg",
                          "srcSet": "/static/13dd49e6926d1983a14edb9c3a6e0b35/a8ae3/807defa879528a3e74d116b532554a5b.jpg 1x,\n/static/13dd49e6926d1983a14edb9c3a6e0b35/3cd25/807defa879528a3e74d116b532554a5b.jpg 1.5x,\n/static/13dd49e6926d1983a14edb9c3a6e0b35/9596d/807defa879528a3e74d116b532554a5b.jpg 2x"
                        }
                      }
                    }
                  }
                ]
              },
              "personalData": {
                "color": "verde",
                "size": "G"
              }
            }
          ]    )
    const [address, setAddress] = useState({cep: '', cidade: '', estado: '', bairro: '', rua: '', numero: '', complemento: ''})
    const [freight, setFreight] = useState(null)
    const [openCart, setOpenCart] = useState(false)
    const [totalPrice, setTotalPrice] = useState(0)

    const addItemToCart = item => {
        setCart([...cart, item])
    }

    const removeItemFromCart = index => {
        const newCart = cart.filter((line, i) => i !== index)
        setCart(newCart)
    }

    useEffect(() => {
        if(cart.length === 0) return setTotalPrice(0)
        const newPrice = cart.reduce(((acum, line) => (acum + (line.item.preco_promocional ? line.item.preco_promocional : line.item.preco_em_centavos))), 0)
        setFreight(null)
        setTotalPrice(newPrice)
    }, [setTotalPrice, cart, setFreight])

    return (
        <CartContext.Provider value={{ address, setAddress, setFreight, freight, cart, addItemToCart, removeItemFromCart, setOpenCart, openCart, totalPrice }}>
        {props.children}
        </CartContext.Provider>
    );
}

export default CartoContextProvider;