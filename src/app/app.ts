import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatAutocomplete } from './mat-autocomplete/mat-autocomplete';
import { Badge } from "./badge/badge";
import { BottomSheet } from "./bottom-sheet/bottom-sheet";
import { Button } from './button/button';
import { Dialog } from "./dialog/dialog";
import { ButtonToggle } from "./button-toggle/button-toggle";
import { Checkbox } from "./checkbox/checkbox";
import { Menu } from "./menu/menu";
import { List } from "./list/list";
import { ProgressBar } from "./progress-bar/progress-bar";
import { Stepper } from "./stepper/stepper";
import { Tree } from "./tree/tree";
import { Chips } from "./chips/chips";
import { Card } from "./card/card";
import { FormField } from "./form-field/form-field";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
    MatSlideToggleModule,
    MatAutocomplete, Badge, BottomSheet, Button, Dialog, ButtonToggle, Checkbox, Menu, List, ProgressBar, Stepper, Tree, Chips, Card, FormField],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'Proyecto';
}

