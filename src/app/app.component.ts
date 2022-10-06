import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private config: PrimeNGConfig,
    private router: Router
  ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('loginToken');
    if (token === null || token === undefined || token === "") {
      localStorage.removeItem('loginToken');
      this.router.navigate(['/login']);
    }

    this.setPrimeConfig();
  }

  setPrimeConfig(): void {
    this.config.setTranslation({
      startsWith: 'İle Başlayan',
      contains: 'İçeren',
      notContains: 'İçermeyen',
      endsWith: 'İle Biten',
      equals: 'Eşittir',
      notEquals: 'Eşit Değildir',
      noFilter: 'Filtre Yok',
      lt: 'Küçüktür',
      lte: 'Küçüktür veya Eşittir',
      gt: 'Büyüktür',
      gte: 'Büyüktür veya Eşittir',
      is: 'Olan',
      isNot: 'Olmayan',
      before: 'Önce',
      after: 'Sonra',
      clear: 'Temizle',
      apply: 'Uygula',
      matchAll: 'Tümünü Eşleştir',
      matchAny: 'Herhangi Birini Eşleştir',
      addRule: 'Kural Ekle',
      removeRule: 'Kural Kaldır',
      accept: 'Evet',
      reject: 'Hayır',
      choose: 'Seç',
      upload: 'Yükle',
      cancel: 'İptal',
      dayNames: ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
      dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      dayNamesMin: ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'],
      monthNames: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
      monthNamesShort: ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'],
      today: 'Bugün',
      weekHeader: 'Hft',
      weak: 'Zayıf',
      medium: 'Orta',
      strong: 'Güçlü',
      passwordPrompt: 'Bir parola girin',
      emptyMessage: 'Sonuç bulunamadı',
      emptyFilterMessage: 'Sonuç bulunamadı',
      dateIs: 'Tarih Eşittir',
      dateIsNot: 'Tarih Eşit Değildir',
      dateAfter: 'Tarih Sonra',
      dateBefore: 'Tarih Önce'
    });
  }
}
