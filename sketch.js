
let cantidadCeldas =100

let matrizActual = new Array(cantidadCeldas)

let tamanoCeldas = 15


function setup() {

	createCanvas(window.innerWidth, window.innerHeight)

	for (let i = 0; i < matrizActual.length; i++){ 

		matrizActual[i] = new Array(cantidadCeldas) 

	}
		
	for (let i = 0; i < matrizActual.length; i++){ 

		for (let j = 0; j < matrizActual.length; j++){ 

			matrizActual[i][j] = floor(random(2))

		}

	}


	dibujarMatriz(matrizActual)
	
}

function dibujarMatriz(matriz){

	let y = 0

	for (let i = 0; i < matriz.length; i++){ 

		let x = 0

		for (let j = 0; j < matriz.length; j++){ 

			if(matriz[i][j]==1){
				fill(255)
			}else{
				fill(0)
			}

			stroke(0);

			rect(x, y, tamanoCeldas, tamanoCeldas);

			x+=tamanoCeldas

		}

		y+=tamanoCeldas

	}

}

function draw() {

	let matrizVieja = matrizActual

	let matrizNueva = new Array(cantidadCeldas)

	for (let i = 0; i < matrizNueva.length; i++){ 

		matrizNueva[i] = new Array(cantidadCeldas) 

	}


	for (let i = 0; i < matrizVieja.length; i++){ 

		for (let j = 0; j < matrizVieja.length; j++){

			let estado = matrizVieja[i][j]

			if(i==0 || i==cantidadCeldas-1 || j==0 ||j==cantidadCeldas-1){
				matrizNueva[i][j]=estado
			}else{

				let vecinos = 0


				vecinos += matrizVieja[i-1][j-1]
				vecinos += matrizVieja[i][j-1]
				vecinos += matrizVieja[i+1][j-1]
				vecinos += matrizVieja[i+1][j]
				vecinos += matrizVieja[i+1][j+1]
				vecinos += matrizVieja[i][j+1]
				vecinos += matrizVieja[i-1][j+1]
				vecinos += matrizVieja[i-1][j]

				

				if (estado == 0 && vecinos == 3) {
					matrizNueva[i][j] = 1
				} else if (estado == 1 && (vecinos < 2 || vecinos > 3)) {
					matrizNueva[i][j] = 0
				} else {
					matrizNueva[i][j] = estado;
				}

			}

		}

	}


	matrizActual = matrizNueva

	dibujarMatriz(matrizActual)



}
