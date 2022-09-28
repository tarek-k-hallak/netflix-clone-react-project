
export default function selectionMap({ series, films }) {
    return {
        series: [
            { title: 'documentaries', data: series.filter((item) => item.genre === 'documentaries') },
            { title: 'children', data: series.filter((item) => item.genre === 'children') },
            { title: 'comedies', data: series.filter((item) => item.genre === 'comedies') },
            { title: 'feel-good', data: series.filter((item) => item.genre === 'feel-good') },
            { title: 'crime', data: series.filter((item) => item.genre === 'crime') }
        ],
        films: [
            { title: 'children', data: films.filter((item) => item.genre === 'children') },
            { title: 'romance', data: films.filter((item) => item.genre === 'romance') },
            { title: 'suspense', data: films.filter((item) => item.genre === 'suspense') },
            { title: 'thriller', data: films.filter((item) => item.genre === 'thriller') },
            { title: 'drama', data: films.filter((item) => item.genre === 'drama') },
        ]
    }
}
