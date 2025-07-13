import type { Meta, StoryObj } from "@storybook/react-vite";

import Task from "./Task";

/*
The `meta` object will be the default export that describes
the component.
*/

const meta = {
  component: Task,
  title: "Core/Task",
  tags: ["autodocs"],
} satisfies Meta<typeof Task>;

export default meta;

type Story = StoryObj<typeof meta>;

/*
The following are named exports that describe the stories
for the component.
*/

export const Default: Story = {
  args: {
    task: {
      id: "1",
      title: "Test Task",
      state: "TASK_INBOX",
    },
  },
};
