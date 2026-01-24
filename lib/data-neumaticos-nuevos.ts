export interface Neumatico {
    id: string;
    brand: string;
    model: string;
    size: string;
    category: 'camion' | 'auto' | 'camioneta' | 'agricola' | 'industrial';
    image: string;
    price_status: 'consultar';
    features: string[];
}

export const neumaticosCatalog: Neumatico[] = [
    // --- CAMIONES ---
    {
        id: 'michelin-xmulti-d',
        brand: 'Michelin',
        model: 'X Multi D',
        size: '295/80R22.5',
        category: 'camion',
        image: '/neumatico-placeholder.png',
        price_status: 'consultar',
        features: ['Tracción optimizada', 'Larga vida útil', 'Bajo consumo de combustible'],
    },
    {
        id: 'bridgestone-r249',
        brand: 'Bridgestone',
        model: 'R249 Ecopia',
        size: '295/80R22.5',
        category: 'camion',
        image: '/neumatico-placeholder.png',
        price_status: 'consultar',
        features: ['Alta eficiencia energética', 'Compuesto ECO', 'Carcasa reforzada'],
    },
    {
        id: 'goodyear-kmax-s',
        brand: 'Goodyear',
        model: 'KMAX S',
        size: '315/80R22.5',
        category: 'camion',
        image: '/neumatico-placeholder.png',
        price_status: 'consultar',
        features: ['Para eje direccional', 'Tecnología KMAX', 'Desgaste uniforme'],
    },
    {
        id: 'pirelli-tr01',
        brand: 'Pirelli',
        model: 'TR:01',
        size: '295/80R22.5',
        category: 'camion',
        image: '/neumatico-placeholder.png',
        price_status: 'consultar',
        features: ['Tracción superior', 'Resistencia al corte', 'Recapable'],
    },
    {
        id: 'fate-sr200',
        brand: 'Fate',
        model: 'SR-200',
        size: '295/80R22.5',
        category: 'camion',
        image: '/neumatico-placeholder.png',
        price_status: 'consultar',
        features: ['Fabricación nacional', 'Excelente relación precio-rendimiento', 'Para rutas y semi-mixto'],
    },

    // --- AUTOS ---
    {
        id: 'michelin-primacy4',
        brand: 'Michelin',
        model: 'Primacy 4',
        size: '205/55R16',
        category: 'auto',
        image: '/neumatico-placeholder.png',
        price_status: 'consultar',
        features: ['Frenado seguro en mojado', 'Confort silencioso', 'Larga duración'],
    },
    {
        id: 'bridgestone-turanza-t005',
        brand: 'Bridgestone',
        model: 'Turanza T005',
        size: '225/45R17',
        category: 'auto',
        image: '/neumatico-placeholder.png',
        price_status: 'consultar',
        features: ['Grip en mojado clase A', 'Conducción precisa', 'Bajo ruido'],
    },
    {
        id: 'pirelli-cinturato-p7',
        brand: 'Pirelli',
        model: 'Cinturato P7',
        size: '225/50R17',
        category: 'auto',
        image: '/neumatico-placeholder.png',
        price_status: 'consultar',
        features: ['Tecnología Run Flat disponible', 'Bajo consumo', 'Alta performance'],
    },
    {
        id: 'fate-eximia-pininfarina',
        brand: 'Fate',
        model: 'Eximia Pininfarina',
        size: '195/55R15',
        category: 'auto',
        image: '/neumatico-placeholder.png',
        price_status: 'consultar',
        features: ['Diseño italiano', 'Fabricación argentina', 'Excelente agarre'],
    },

    // --- CAMIONETAS ---
    {
        id: 'goodyear-wrangler-at',
        brand: 'Goodyear',
        model: 'Wrangler AT/S',
        size: '265/65R17',
        category: 'camioneta',
        image: '/neumatico-placeholder.png',
        price_status: 'consultar',
        features: ['All-Terrain', 'Resistente a piedras', 'Ideal para SUV y pickup'],
    },
    {
        id: 'bridgestone-dueler-at',
        brand: 'Bridgestone',
        model: 'Dueler A/T 693',
        size: '255/70R16',
        category: 'camioneta',
        image: '/neumatico-placeholder.png',
        price_status: 'consultar',
        features: ['Uso mixto asfalto/tierra', 'Diseño robusto', 'Durabilidad garantizada'],
    },

    // --- AGRÍCOLA ---
    {
        id: 'pirelli-tm99',
        brand: 'Pirelli',
        model: 'TM99',
        size: '18.4R34',
        category: 'agricola',
        image: '/neumatico-placeholder.png',
        price_status: 'consultar',
        features: ['Para tractores', 'Tracción en barro', 'Carcasa radial'],
    },
    {
        id: 'fate-gd800',
        brand: 'Fate',
        model: 'GD-800',
        size: '16.9R30',
        category: 'agricola',
        image: '/neumatico-placeholder.png',
        price_status: 'consultar',
        features: ['Cosechadoras y tractores', 'Alta flotación', 'Bajo impacto al suelo'],
    },

    // --- INDUSTRIAL ---
    {
        id: 'bridgestone-jla',
        brand: 'Bridgestone',
        model: 'JLA',
        size: '7.00-12',
        category: 'industrial',
        image: '/neumatico-placeholder.png',
        price_status: 'consultar',
        features: ['Para autoelevadores', 'Compuesto anti-corte', 'Alta capacidad de carga'],
    },
    {
        id: 'michelin-xzm',
        brand: 'Michelin',
        model: 'XZM',
        size: '6.50-10',
        category: 'industrial',
        image: '/neumatico-placeholder.png',
        price_status: 'consultar',
        features: ['Minicargadoras', 'Estabilidad superior', 'Larga vida útil en depósitos'],
    },
];

export const categories = [
    { id: 'todo', label: 'Todo' },
    { id: 'camion', label: 'Camiones' },
    { id: 'auto', label: 'Autos' },
    { id: 'camioneta', label: 'Camionetas' },
    { id: 'agricola', label: 'Agro' },
    { id: 'industrial', label: 'Industrial' },
];

export const brands = ['Michelin', 'Bridgestone', 'Fate', 'Pirelli', 'Goodyear'];
