import { NextRequest, NextResponse } from 'next/server';

const data = [
  {
    id: 1,
    category: 'Statistika',
    image: 'https://asset.kompas.com/crops/QeA5ewu_XESaU8-jafsrR4rSvJo=/0x82:6850x4649/750x500/data/photo/2021/09/18/614581ac6ba4d.jpg',
    pin: '208387',
  },
  {
    id: 2,
    category: 'Metode Ilmiah',
    image: 'https://asset.kompas.com/crops/QeA5ewu_XESaU8-jafsrR4rSvJo=/0x82:6850x4649/750x500/data/photo/2021/09/18/614581ac6ba4d.jpg',
    pin: '208387',
  },
  {
    id: 3,
    category: 'Aljabar',
    image: 'https://asset.kompas.com/crops/QeA5ewu_XESaU8-jafsrR4rSvJo=/0x82:6850x4649/750x500/data/photo/2021/09/18/614581ac6ba4d.jpg',
    pin: '208387',
  },
  {
    id: 4,
    category: 'Aljabar 2',
    image: 'https://asset.kompas.com/crops/QeA5ewu_XESaU8-jafsrR4rSvJo=/0x82:6850x4649/750x500/data/photo/2021/09/18/614581ac6ba4d.jpg',
    pin: '208387',
  },
];

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  if (id) {
    const detailCourse = data.find((item) => item.id == Number(id));
    if (detailCourse) {
      return NextResponse.json({ status: 200, message: 'succes', detailCourse });
    }
    return NextResponse.json({ status: 404, message: 'detail not found' });
  }
  return NextResponse.json({ status: 200, message: 'succes', data });
}
