// server.ts
import { animalDiets } from "./main.ts";

const HOST = "localhost";
const PORT = 8000;

function handler(_req: Request): Response {
  const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Zoo Animal Diets</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
        </head>
        <body>
        <div class="container-fluid mt-1">
        <h1>Zoo Animals</h1>
        
            ${Object.values(animalDiets)
              .map((diet) =>
                diet.animal
                  .map(
                    (animal) => `
                    <div class="card w-75 mb-3">
                        <div class="card-body">
                        <h2 class="card-title">${animal.name}</h2>
                        <p class="card-text"><span class="h6">Location:</span> Cage ${animal.cageNumber}</p>
                        <ul class="list-group"><span class="h6">Diet:</span>
                            ${diet.foods
                              .map(
                                (food) =>
                                  `<li class="list-group-item"><span class="h6">${food.name.toUpperCase()}</span> with an average fat content of <span class="h6">${
                                    food.fatContent
                                  }g</span></li>`
                              )
                              .join("")}
                        </ul>
                </div>
              </div>`
                  )
                  .join("")
              )
              .join("")}
              </div>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
        </body>
        </html>
    `;
  return new Response(html, {
    headers: { "content-type": "text/html" },
  });
}

Deno.serve({ hostname: HOST, port: PORT }, handler);
