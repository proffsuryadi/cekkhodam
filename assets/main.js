function cekKhodam(event) {
    event.preventDefault();
    let nama = $('#search').val();
    if (nama === '') {
        alert('Masukkan nama terlebih dahulu!');
    } else {
        let status = [
            'isi',
            'kosong',
        ]
        const randomStatus = Math.floor(Math.random() * status.length);
        if (randomStatus === 0) {
            let khodam = [
                'Ayam Jago',
                'Ayam Kate',
                'Ayam Geprek',
                'Ayam Sayur',
                'Ayam Bakar',
                'Ayam Goreng si Mail',
                'Anjing',
                'Anjing Kaki 3',
                'Anjing Ga Jelas',
                'Anjing Marah',
                'Kalkun',
                'Macan',
                'Harimau',
                'Harimau Pagi',
                'Kucing Kawin',
                'Kucing Oren',
                'Kucing Belang',
                'Kucing Berak',
                'Maung',
                'Naruto',
                'Tom & Jerry',
                'Petir Zeus',
                'Pinjol',
                'Bank Emok',
                'Hokage ke 7',
                'Hokage Pertama',
                'Hokage ke 2',
                'Hokage ke 3',
                'Hokage ke 4',
                'Hokage ke 5',
                'Hokage ke 6',
                'Kakek Sugiono',
                'Macan Ompong',
                'Singa',
                'Singa Jantan',
                'Singa Banci',
                'Maria Ozawa',
                'Mia Khalifah',
                'Beat Mber',
                'Mio Karbu',
                'SupraX BapaX',
                'Supra Batok Geter',
                'Ada Ibu-ibu Guys',
                'Onbold',
                'Free Wifi',
                'Charger Kodok',
                'Tobrut',
                'Toge',
                'Tocil',
                'Bulu Ketek',
                'Esia Hidayah',
                'Dinosaurus',
                'Kumis Lele',
                'Iwak Bandeng',
                'Iwak Bloso',
                'Nenek Gayung',
                'Kakek Cangkul',
                'Buaya',
                'Buaya darat',
                'APlikasi meChat',
                'Chat GPT',
                'Youtube Biru',
                'Tuyul',
                'Bau Pandan',
                'Sabun Bolong',
                'Ayam Kampus',
                'Jin Tomang',
                'Setan Togel',
                'Bakso Disanguan',
                'Sampah Masyarakat',
                'Naga Sawah',
                'Setan',
                'Hantu Penunggu Angkot',
                'Jin & Jun',
                'Iblis Bawa Mangkok',
                'Kunti Bogel',
                'Kucing Kawin',
                'Pocong'
            ];
            const random = Math.floor(Math.random() * khodam.length);
            $('#result').html(`${nama.toUpperCase()} - Khodam Kamu (${khodam[random]})`);
            $('#search').val('');
        }
        else {
            $('#result').html(`${nama.toUpperCase()} - KOSONG`);
            $('#search').val('');
        }
    }
}

$(document).ready(function () {
    $('#btn-search').click(cekKhodam);
});