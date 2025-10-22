import nomerS from '../assets/nomerS.png'
import nomerD from '../assets/nomerD.png'
import ski from '../assets/lugi.png'
import snowboard from '../assets/sbowboard.png'
import cap from '../assets/cap.png'
import shoes from '../assets/shoes.png'
import oko from '../assets/oko.png'

export const userData = {
	name: 'Олександр',
	surename: 'Петренко',
	email: 'alex.petrenko@email.com',
	phone: '+380 (67) 123-45-67',
	memberSince: '2020',
	membershipLevel: 'Gold',
	avatar: '/fon.jpg',
}

export const bookings = [
	{
		id: '1',
		type: 'Номер готелю',
		name: 'Люкс з видом на гори',
		dates: '15-20 грудня 2024',
		guests: 2,
		status: 'confirmed',
		price: '₴12,000',
		details: {
			roomNumber: '205',
			floor: '2-й поверх',
			size: '45 м²',
			bedType: 'King Size ліжко',
			amenities: [
				'Вид на гори',
				'Балкон',
				'Міні-бар',
				'Сейф',
				'Кондиціонер',
				'Телевізор 55"',
			],
			checkIn: '15 грудня 2024, 15:00',
			checkOut: '20 грудня 2024, 11:00',
			totalNights: 5,
			pricePerNight: '₴2,400',
			contact: '+380 (44) 123-45-67',
		},
	},
	{
		id: '2',
		type: 'Абонемент',
		name: 'Тижневий ски-пас',
		dates: '15-22 грудня 2024',
		guests: 1,
		status: 'active',
		price: '₴3,500',
		details: {
			passType: 'Тижневий ски-пас',
			validFrom: '15 грудня 2024',
			validTo: '22 грудня 2024',
			slopes: 'Всі схили курорту',
			lifts: 'Всі підйомники',
			restrictions: 'Немає обмежень',
			qrCode: 'SP2024001234',
			contact: '+380 (44) 123-45-67',
		},
	},
]

export const rentals = [
	{
		id: '1',
		item: 'Лижі + черевики',
		brand: 'Rossignol Experience',
		dates: '15-20 грудня 2024',
		status: 'active',
		price: '₴1,200',
		details: {
			equipment:
				'Лижі Rossignol Experience 88 HD + черевики Rossignol Pure Pro 100',
			size: 'Лижі: 170см, Черевики: 42 розмір',
			condition: 'Відмінний стан',
			pickupLocation: 'Пункт оренди (1-й поверх готелю)',
			returnLocation: 'Пункт оренди (1-й поверх готелю)',
			pickupTime: '15 грудня 2024, 08:00',
			returnTime: '20 грудня 2024, 18:00',
			deposit: '₴2,000 (повернеться після здачі)',
			contact: '+380 (44) 123-45-68',
		},
	},
	{
		id: '2',
		item: 'Сноуборд + черевики',
		brand: 'Burton Custom',
		dates: '22-25 грудня 2024',
		status: 'upcoming',
		price: '₴1,500',
		details: {
			equipment: 'Сноуборд Burton Custom + черевики Burton Ion',
			size: 'Сноуборд: 158см, Черевики: 43 розмір',
			condition: 'Відмінний стан',
			pickupLocation: 'Пункт оренди (1-й поверх готелю)',
			returnLocation: 'Пункт оренди (1-й поверх готелю)',
			pickupTime: '22 грудня 2024, 08:00',
			returnTime: '25 грудня 2024, 18:00',
			deposit: '₴2,500 (повернеться після здачі)',
			contact: '+380 (44) 123-45-68',
		},
	},
]

//Для особистого кобінету
export const skiPasses = [
	{
		id: '1',
		name: 'Тижневий ски-пас',
		type: '7 днів',
		validFrom: '15 грудня 2024',
		validTo: '22 грудня 2024',
		status: 'active',
		price: '₴3,500',
		qrCode: 'SP2024001234',
	},
	{
		id: '2',
		name: 'Денний ски-пас',
		type: '1 день',
		validFrom: '10 грудня 2024',
		validTo: '10 грудня 2024',
		status: 'used',
		price: '₴800',
		qrCode: 'SP2024001235',
	},
]
//для абонементів на сторнці з купівлі
export const skiPassess = [
	{
		id: 'day-pass',
		name: 'Денний',
		description: 'Один день катання на всіх трасах',
		price: 800,
		duration: '1 день',
		features: [
			'Доступ до всіх 15 трас',
			'Безлімітне користування підйомниками',
			'Знижка 10% в кафе',
			'Безкоштовний Wi-Fi',
		],
		popular: false,
		color: 'bg-blue-500',
	},
	{
		id: 'weekend-pass',
		name: 'Вікенд',
		description: 'Два дні катання (субота + неділя)',
		price: 1400,
		duration: '2 дні',
		features: [
			'Доступ до всіх 15 трас',
			'Безлімітне користування підйомниками',
			'Знижка 15% в кафе та ресторані',
			'Безкоштовний Wi-Fi',
			'Пріоритетна черга на підйомники',
		],
		popular: true,
		color: 'bg-yellow-500',
	},
	{
		id: 'week-pass',
		name: 'Тижневий',
		description: 'Сім днів катання протягом тижня',
		price: 4500,
		duration: '7 днів',
		features: [
			'Доступ до всіх 15 трас',
			'Безлімітне користування підйомниками',
			'Знижка 20% в кафе та ресторані',
			'Безкоштовний Wi-Fi',
			'Пріоритетна черга на підйомники',
			'Безкоштовне зберігання обладнання',
			'Одне безкоштовне заняття з інструктором',
		],
		popular: false,
		color: 'bg-green-500',
	},
	{
		id: 'season-pass',
		name: 'Сезонний',
		description: 'Весь зимовий сезон (грудень - березень)',
		price: 15000,
		duration: 'Весь сезон',
		features: [
			'Доступ до всіх 15 трас',
			'Безлімітне користування підйомниками',
			'Знижка 25% в кафе та ресторані',
			'Безкоштовний Wi-Fi',
			'Пріоритетна черга на підйомники',
			'Безкоштовне зберігання обладнання',
			'Три безкоштовних заняття з інструктором',
			'Доступ до VIP зони відпочинку',
			'Безкоштовний трансфер з готелю',
		],
		popular: false,
		color: 'bg-purple-500',
	},
]

export const roomTypes = [
	{
		id: 'standard',
		name: 'Стандартний номер',
		description: 'Затишний номер з усіма зручностями',
		price: 2500,
		maxGuests: 2,
		amenities: ['Wifi', 'Телевізор', 'Міні-бар', 'Кондиціонер'],
		image: nomerS,
		available: true,
	},
	{
		id: 'deluxe',
		name: 'Делюкс номер',
		description: 'Просторий номер з балконом та видом на гори',
		price: 3500,
		maxGuests: 3,
		amenities: ['Wifi', 'Балкон', 'Міні-бар', 'Сейф', 'Халати'],
		image: nomerD,
		available: true,
	},
	{
		id: 'suite',
		name: 'Люкс з видом на гори',
		description: 'Розкішний номер з панорамним видом та джакузі',
		price: 6000,
		maxGuests: 4,
		amenities: ['Wifi', 'Джакузі', 'Камін', 'Кухня', 'Тераса'],
		image: '/placeholder.svg?height=200&width=300&text=Mountain+Suite',
		available: false, // some rooms may not be available
	},
]

//спорядження
export interface Equipment {
	id: string
	name: string
	brand: string
	category: 'skis' | 'snowboards' | 'boots' | 'helmets' | 'accessories'
	price: number
	image: string
	rating: number
	description: string
	sizes?: string[]
	inStock: number
}

export const equipment: Equipment[] = [
	{
		id: 'ski-1',
		name: 'Experience 88 Ti',
		brand: 'Rossignol',
		category: 'skis',
		price: 200,
		image: ski,
		rating: 4.8,
		description: 'Універсальні лижі для всіх типів снігу',
		sizes: ['160cm', '170cm', '180cm'],
		inStock: 15,
	},
	{
		id: 'snowboard-1',
		name: 'Custom Flying V',
		brand: 'Burton',
		category: 'snowboards',
		price: 180,
		image: snowboard,
		rating: 4.9,
		description: 'Ідеальний сноуборд для фрістайлу',
		sizes: ['150cm', '155cm', '160cm'],
		inStock: 12,
	},
	{
		id: 'boots-1',
		name: 'Speed Zone Plus',
		brand: 'K2',
		category: 'boots',
		price: 120,
		image: shoes,
		rating: 4.7,
		description: 'Комфортні черевики з швидкою шнурівкою',
		sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
		inStock: 20,
	},
	{
		id: 'helmet-1',
		name: 'Vector MIPS',
		brand: 'Smith',
		category: 'helmets',
		price: 80,
		image: cap,
		rating: 4.6,
		description: 'Захисний шолом з технологією MIPS',
		sizes: ['S', 'M', 'L', 'XL'],
		inStock: 25,
	},
	{
		id: 'goggles-1',
		name: 'I/O MAG XL',
		brand: 'Smith',
		category: 'accessories',
		price: 60,
		image: oko,
		rating: 4.5,
		description: 'Окуляри з магнітною заміною лінз',
		inStock: 18,
	},
]
