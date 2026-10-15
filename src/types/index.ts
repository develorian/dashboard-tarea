// Primero, definimos las innterfaces para nuestras tarjetas de estadísticas y los props de los componentes

export interface StatItem {
    id: number;
    title: string;
    value: string;
    change: string;
    trend: 'up' | 'down';
    desc: string,
}

export interface StatCardProps extends Omit<StatItem, 'id'> {}