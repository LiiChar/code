class Canvas {
	private canvas: HTMLCanvasElement;
	public ctx: CanvasRenderingContext2D;
	public width: number;
	public height: number;
	private objects: Shape[] = [];
	public mousePosition = { x: 0, y: 0 };
	private updateInterval: Timer;

	constructor(selector = null, w = 400, h = 400) {
		if (selector) {
			this.canvas = document.querySelector(selector)!;
			this.width = this.canvas.width;
			this.height = this.canvas.height;
		} else {
			const cns = document.createElement('canvas');

			if (w == null) {
				cns.width = document.body.clientWidth;
			} else {
				cns.width = w;
			}
			if (h == null) {
				cns.height = document.body.clientHeight;
			} else {
				cns.height = h;
			}
			this.width = cns.width;
			this.height = cns.height;
			document.body.appendChild(cns);
			this.canvas = cns;
		}
		this.ctx = this.canvas.getContext('2d')!;

		this.updateInterval = setInterval(() => this.update(), 1000 / 60);
		this.setHandlers();
	}

	addShape(shape: Shape): void {
		this.objects.push(shape);
	}

	shapeCollision(object: Shape): Shape[] | null {
		const objects: Shape[] = [];
		this.objects.forEach(obj => {
			if (object instanceof Circle && obj instanceof Circle) {
				const distanceX = object.x - obj.x;
				const distanceY = object.y - obj.y;
				const distance = Math.sqrt(
					distanceX * distanceX + distanceY * distanceY
				);

				if (distance < object.radius + obj.radius) {
					objects.push(obj);
				}
			}

			if (object instanceof Rectangle && obj instanceof Circle) {
				const circleDistanceX = Math.abs(obj.x - object.x - object.width / 2);
				const circleDistanceY = Math.abs(obj.y - object.y - object.height / 2);

				if (
					circleDistanceX <= object.width / 2 ||
					circleDistanceY <= object.height / 2
				) {
					objects.push(obj);
				}
			}

			if (object instanceof Rectangle && obj instanceof Rectangle) {
				if (
					(object.x > obj.x &&
						object.x < obj.x + object.width &&
						object.y > obj.y &&
						object.y < obj.y + object.height) ||
					object.x == obj.x ||
					object.y == obj.y
				) {
					objects.push(obj);
				}
			}
		});
		return objects.length == 0 ? null : objects;
	}

	update() {
		this.ctx.clearRect(0, 0, this.width, this.height);
		this.objects.forEach(object => {
			object.draw(this.ctx);
			const collision = this.shapeCollision(object);

			if (collision) {
				object.collision(collision);
			}
		});
	}

	setHandlers() {
		document.addEventListener('resize', e => {
			this.canvas.width = document.body.clientWidth;
			this.canvas.height = document.body.clientHeight;

			this.width = this.canvas.width;
			this.height = this.canvas.height;
		});
		this.canvas.addEventListener('mousemove', event => {
			// Получаем координаты мыши относительно canvas
			const mouseX = event.clientX - this.canvas.getBoundingClientRect().left;
			const mouseY = event.clientY - this.canvas.getBoundingClientRect().top;

			this.mousePosition = { x: mouseX, y: mouseY };
		});
	}
}

class Shape {
	public x: number = 0;
	public y: number = 0;
	public color: string;

	constructor(x: number = 0, y: number = 0, color: string = 'black') {
		this.x = x;
		this.y = y;
		this.color = color;
	}

	draw(ctx: CanvasRenderingContext2D): void {}

	update(shape: Shape): void {}
	collision(objects: Shape[]): void {
		const velocity = { x: 0, y: 0 };
		objects.forEach(obj => {
			if (this.x > obj.x) {
				velocity.x += 1;
			}
			if (this.x < obj.x) {
				velocity.x -= 1;
			}
			if (this.y > obj.y) {
				velocity.y -= 1;
			}
			if (this.y < obj.y) {
				velocity.y += 1;
			}
		});

		this.x += velocity.x;
		this.y += velocity.y;
	}
}

class Circle extends Shape {
	public radius: number;

	constructor(x: number, y: number, radius: number, color: string) {
		super(x, y, color);
		this.radius = radius;
	}

	draw(ctx: CanvasRenderingContext2D) {
		ctx.beginPath();
		ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
		this.update(this);
	}

	update(shape: typeof this): void {}
	collision(objects: Shape[]): void {
		const velocity = { x: 0, y: 0 };
		objects.forEach(obj => {
			velocity.x += -obj.x;
			velocity.y += -obj.y;
		});
		this.x += velocity.x;
		this.y += velocity.y;
	}
}

class Rectangle extends Shape {
	public width: number = 0;
	public height: number = 0;

	constructor(
		x: number,
		y: number,
		width: number,
		height: number,
		color: string
	) {
		super(x, y, color);
		this.width = width;
		this.height = height;
	}

	draw(ctx: CanvasRenderingContext2D) {
		ctx.beginPath();
		ctx.rect(this.x, this.y, this.width, this.height);
		ctx.fillStyle = this.color;
		ctx.fill();
		ctx.closePath();
		this.update(this);
	}

	update(shape: this): void {}
}

class Sprite extends Shape {
	public width: number = 0;
	public height: number = 0;
	public path: string;

	constructor(
		x: number,
		y: number,
		width: number,
		height: number,
		path: string
	) {
		super(x, y);
		this.width = width;
		this.height = height;
		this.path = path;
	}

	draw(ctx: CanvasRenderingContext2D) {
		// ctx.drawImage
		this.update(this);
	}

	update(shape: this): void {}
}

class Label extends Rectangle {
	public text: string;
	public fontColor: string = 'black';
	public fontSize: number = 14;
	public fontFamily: string = '';
	constructor(
		text: string,
		x: number,
		y: number,
		width: number = 50,
		height: number = 20,
		color: string
	) {
		super(x, y, width, height, color);
		this.text = text;
	}
}

const cns = new Canvas();

for (let i = 1; i < 5; i++) {
	const circle = new Rectangle(i * 15, i * 15, 10, 10, 'black');
	circle.update = (c: Rectangle) => {
		const distanceX = cns.mousePosition.x - c.x;
		const distanceY = cns.mousePosition.y - c.y;

		// Рассчитываем угол направления
		const angle = Math.atan2(distanceY, distanceX);

		// Рассчитываем новые координаты
		c.x += (Math.cos(angle) * Math.random() * 50) % 5;
		c.y += (Math.sin(angle) * Math.random() * 50) % 5;

		// Проверяем, достигли ли мы целевой точки
		if (Math.abs(distanceX) < 5 && Math.abs(distanceY) < 5) {
			c.x = cns.mousePosition.x;
			c.y = cns.mousePosition.y;
		}
	};
	cns.addShape(circle);
}
