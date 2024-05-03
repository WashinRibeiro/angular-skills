import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ICard } from "./card/card.component";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  cards: Array<ICard>;
  loading: boolean = true;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get("/api/skills").subscribe((ret: Array<ICard>) => {
      this.cards = ret;
      this.loading = false;
    });
  }
}
