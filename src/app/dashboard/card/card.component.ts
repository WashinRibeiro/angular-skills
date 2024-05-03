import { HttpClient } from "@angular/common/http";
import { Component, Input, ViewEncapsulation } from "@angular/core";

export interface ICard {
  description: string;
  id: number;
  likes: number;
  name: string;
  pic: string;
}

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.css"],
  encapsulation: ViewEncapsulation.None,
})
export class CardComponent {
  constructor(private httpClient: HttpClient) {}

  @Input() card: ICard;
  color: string = "#75e975";
  loading = false;

  onLike() {
    this.loading = true;
    this.httpClient.put(`/api/skills/${this.card.id}`, this.card).subscribe(
      () => {
        this.card.likes++;

        if (this.card.likes >= 5) this.color = "#36bdf9";
        if (this.card.likes > 10) this.color = "#f5b364";

        this.loading = false;
      },
      () => {
        this.loading = false;
      }
    );
  }

  onShare() {
    window.open(
      "https://www.linkedin.com/in/washington-ribeiro-da-silva/",
      "_blank"
    );
  }
}
