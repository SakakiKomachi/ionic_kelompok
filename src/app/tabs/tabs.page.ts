import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  leagues: any[] = [];
  englishTeams: any[] = [];
  spanishTeams: any[] = [];
  latestEvent: any;

  constructor(private http: HttpClient) {
    this.getLeagues();
    this.getEnglishTeams();
    this.getSpanishTeams();
    this.getLatestEvent();
  }

  getLeagues() {
    this.http
      .get('https://www.thesportsdb.com/api/v1/json/3/all_leagues.php')
      .subscribe((response: any) => {
        this.leagues = response.leagues;
      });
  }

  getEnglishTeams() {
    this.http
      .get(
        'https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League'
      )
      .subscribe((response: any) => {
        this.englishTeams = response.teams;
      });
  }

  getSpanishTeams() {
    this.http
      .get(
        'https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?s=Soccer&c=Spain'
      )
      .subscribe((response: any) => {
        this.spanishTeams = response.teams;
      });
  }

  getLatestEvent() {
    this.http
      .get(
        'https://www.thesportsdb.com/api/v1/json/3/eventslast.php?id=133602'
      )
      .subscribe((response: any) => {
        this.latestEvent = response.results[0];
      });
  }
}
