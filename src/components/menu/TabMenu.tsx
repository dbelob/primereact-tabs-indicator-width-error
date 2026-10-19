import { Tabs } from '@primereact/ui/tabs';
import type { MenuItem } from './MenuItem';

type TabMenuProps = {
    /**
     * An array of menu items.
     */
    model?: MenuItem[] | undefined;
    /**
     * Active index of menu item.
     * @defaultValue 0
     */
    activeIndex?: number | undefined;
    /**
     * Style class of the component.
     */
    className?: string | undefined;
};

export default function TabMenu(props: TabMenuProps) {
    return (
        <>
            <Tabs.Root
                defaultValue={props.activeIndex}
            >
                <Tabs.List>
                    {props.model
                        ?.filter((item) => (item.visible ?? true))
                        .map((item, itemIndex) => (
                            <Tabs.Tab
                                key={itemIndex}
                                value={itemIndex}
                                disabled={item.disabled}
                                className="flex items-center gap-2"
                            >
                                {item.icon && <i className={item.icon} />}
                                {item.label}
                            </Tabs.Tab>
                        ))}
                    <Tabs.Indicator />
                </Tabs.List>
            </Tabs.Root>
        </>
    );
}