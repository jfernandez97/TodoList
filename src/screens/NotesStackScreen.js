import CreateNote from "./CreateNote";
import Notes from "./Notes";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const StackForNote = createNativeStackNavigator();

export default function Navigator() {
  return (
    <StackForNote.Navigator>
      <StackForNote.Screen
        name="NotesStack"
        component={Notes}
        options={{ headerShown: false }}
      />
      <StackForNote.Screen
        name="CreateNoteStack"
        component={CreateNote}
        options={{ headerShown: false }}
      />
    </StackForNote.Navigator>
  );
}
