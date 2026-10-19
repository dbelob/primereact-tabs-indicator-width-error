/**
 * Defines model of MenuItem API.
 * @group Model
 */
export interface MenuItem {
    /**
     * Unique identifier of the menu item.
     */
    id?: string | undefined;
    /**
     * Text of the menuitem.
     */
    label?: string | undefined;
    /**
     * Icon of the item. It can be a string, JSX.Element or method.
     */
    icon?: any | undefined;
    /**
     * When set as true, disables the menu item.
     * @defaultValue false
     */
    disabled?: boolean | undefined;
    /**
     * When set as false, hides the menuitem.
     * @defaultValue true
     */
    visible?: boolean | undefined;
}
