import { defineConfig } from "sanity";
import {deskTool} from 'sanity/desk';
import schemas from "./sanity/schemas";

const config = defineConfig({
   projectId: 'ovansidt',
   dataset: 'production',
   title: 'udemy-shop-2',
   apiVersion: '2023-11-21',
   basePath: '/admin',
   plugins: [deskTool()],
   schema: {types: schemas},
})

export default config;