
  import { Box, CreditCard, FileText, Settings } from 'lucide-react';
import { accordionDocData } from "@/components/ui/neo-accordion";
import { buttonDocData } from "@/components/ui/neo-button"; // New Import
import { badgeDocData } from "@/components/ui/neo-badge"; // New Import
  import { cardDocData } from "@/components/ui/neo-card"; // New Import
  import { dialogDocData } from "@/components/ui/neo-dialog"; // New Import
import { helpersDocData } from '@/components/ui/neo-helpers';
import { inputDocData } from '@/components/ui/neo-input';
import { sectionTitleDocData } from '@/components/ui/neo-section-title';
import { skeletonDocData } from '@/components/ui/neo-skeleton';
import { statsDocData } from "@/components/ui/neo-stat"; // New Import
import { switchDocData } from '@/components/ui/neo-switch';
  import { tabsDocData } from '@/components/ui/neo-tabs';
  import { toastDocData } from "@/components/ui/neo-toast"; // New Import
  import { textareaDocData } from "@/components/ui/neo-textarea"; // New Import
  

    // 1. Sidebar Links
    export const sidebarLinks = [
      { icon: <Box size={18} />, label: 'Getting Started', href: '/docs' },
      { icon: <CreditCard size={18} />, label: 'Components', href: '/components', active: true },
      { icon: <FileText size={18} />, label: 'Documentation', href: '/docs' },
      { icon: <Settings size={18} />, label: 'API Reference', href: '/api' },
    ];

    // 2. Component Categories (for the sidebar)
    export const componentCategories = [
      {
        title: 'General',
        items: [
          { name: 'Button', href: '/components/button' },
          { name: 'Badge', href: '/components/badge' },
          { name: 'Card', href: '/components/card' },
          { name: 'Stats', href: '/components/stats' },
          { name: 'Typography', href: '/components/typography' },
          { name: 'Iconography', href: '/components/icons' },
        ]
      },
      {
        title: 'Forms',
        items: [
          { name: 'Input', href: '/components/input' },
          { name: 'Textarea', href: '/components/textarea' },
          { name: 'Select', href: '/components/select' },
          { name: 'Checkbox', href: '/components/checkbox' },
          { name: 'Radio Group', href: '/components/radio-group' },
          { name: 'Switch', href: '/components/switch' },
          { name: 'Slider', href: '/components/slider' },
          { name: 'Date Picker', href: '/components/date-picker' },
          { name: 'Form', href: '/components/form' },
          { name: 'Input OTP', href: '/components/input-otp' },
        ]
      },
      {
        title: 'Navigation',
        items: [
          { name: 'Navigation Menu', href: '/components/navigation-menu' },
          { name: 'Breadcrumb', href: '/components/breadcrumb' },
          { name: 'Tabs', href: '/components/tabs' },
          { name: 'Pagination', href: '/components/pagination' },
          { name: 'Dropdown Menu', href: '/components/dropdown-menu' },
          { name: 'Menubar', href: '/components/menubar' },
        ]
      },
      {
        title: 'Data Display',
        items: [
          { name: 'Table', href: '/components/table' },
          { name: 'Data Table', href: '/components/data-table' },
          { name: 'Accordion', href: '/components/accordion' },
          { name: 'Avatar', href: '/components/avatar' },
          { name: 'Calendar', href: '/components/calendar' },
          { name: 'Carousel', href: '/components/carousel' },
          { name: 'Separator', href: '/components/separator' },
          { name: 'Scroll Area', href: '/components/scroll-area' },
          { name: 'Skeleton', href: '/components/skeleton' },
        ]
      },
      {
        title: 'Overlays & Feedback',
        items: [
          { name: 'Dialog', href: '/components/dialog' },
          { name: 'AlertDialog', href: '/components/alert-dialog' },
          { name: 'Sheet', href: '/components/sheet' },
          { name: 'Popover', href: '/components/popover' },
          { name: 'Tooltip', href: '/components/tooltip' },
          { name: 'Toast', href: '/components/toast' },
          { name: 'Sonner', href: '/components/sonner' },
          { name: 'Command', href: '/components/command' },
          { name: 'Hover Card', href: '/components/hover-card' },
          { name: 'Context Menu', href: '/components/context-menu' },
        ]
      },
      {
        title: 'Utilities',
        items: [
          { name: 'Aspect Ratio', href: '/components/aspect-ratio' },
          { name: 'Collapsible', href: '/components/collapsible' },
          { name: 'Progress', href: '/components/progress' },
          { name: 'Resizable', href: '/components/resizable' },
        ]
      }
    ];

    interface ComponentMeta {
      title: string;
      description?: string;
      status?: string;
      example?: React.ReactNode;
      code?: string;
    }

    // 3. The Registry (The Database of your docs)
    export const componentRegistry: Record<string, ComponentMeta> = {
      // General
      "button": buttonDocData,
      "badge": badgeDocData,
      "card": cardDocData,
      "stats": statsDocData,
      "typography": { title: "Typography" },
      "icons": { title: "Iconography" },

      // Forms
      "input": inputDocData,
      "helpers": helpersDocData,
      "textarea": textareaDocData,
      "select": { title: "Select" },
      "checkbox": { title: "Checkbox" },
      "radio-group": { title: "Radio Group" },
      "switch": switchDocData,
      "slider": { title: "Slider" },
      "date-picker": { title: "Date Picker" },
      "form": { title: "Form" },
      "input-otp": { title: "Input OTP" },

      // Navigation
      "navigation-menu": { title: "Navigation Menu" },
      "breadcrumb": { title: "Breadcrumb" },
      "tabs": tabsDocData,
      "pagination": { title: "Pagination" },
      "dropdown-menu": { title: "Dropdown Menu" },
      "menubar": { title: "Menubar" },

      // Data Display
      "table": { title: "Table" },
      "data-table": { title: "Data Table" },
      "accordion": accordionDocData,
      "avatar": { title: "Avatar" },
      "calendar": { title: "Calendar" },
      "carousel": { title: "Carousel" },
      "separator": { title: "Separator" },
      "scroll-area": { title: "Scroll Area" },
      "skeleton": skeletonDocData,

      // Overlays & Feedback
      "dialog": dialogDocData,
      "alert-dialog": { title: "AlertDialog" },
      "sheet": { title: "Sheet" },
      "popover": { title: "Popover" },
      "tooltip": { title: "Tooltip" },
      "toast": toastDocData,
      "sonner": { title: "Sonner" },
      "command": { title: "Command" },
      "hover-card": { title: "Hover Card" },
      "context-menu": { title: "Context Menu" },

      // Utilities
      "aspect-ratio": { title: "Aspect Ratio" },
      "collapsible": { title: "Collapsible" },
      "progress": { title: "Progress" },
      "resizable": { title: "Resizable" },
    };