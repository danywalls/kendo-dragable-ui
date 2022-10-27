import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'kendo-dragable-ui';

  scrum = [
    {
      name: 'TODO',
      stories: [
        {
          id: 1,
          title: 'Story 1',
          description: 'Description 1',
          status: 'none',
        },
        {
          id: 2,
          title: 'Story 2',
          description: 'Description 2',
          status: 'none',
        },
        {
          id: 3,
          title: 'Story 3',
          description: 'Description 3',
          status: 'none',
        }
      ],
    },
    {
      name: 'ACTIVE',
      stories: [
      ]
    },
    {
      name: 'DONE',
      stories: []
    },
    {
      name: 'BLOCKED',
      stories: []
    }
  ];

  selectedStory: any;

  public handleRelease(section: any, story: any): void {
    this.selectedStory = story;
    section.stories = section.stories.filter((s: any) => s.id !== story.id);
  }

  public handleDrop(dropSection: any): void {
    this.selectedStory.status = dropSection.name;
    dropSection.stories.push(this.selectedStory);
  }
}
