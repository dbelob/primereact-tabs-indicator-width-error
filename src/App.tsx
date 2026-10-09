import { useEffect, useState } from 'react';
import { Code } from '@primeicons/react/code';
import { CodeBranch } from '@primeicons/react/code-branch';
import { Cog } from '@primeicons/react/cog';
import { InfoCircle } from '@primeicons/react/info-circle';
import { Tabs } from '@primereact/ui/tabs';
import './App.css'

export default function App() {
    const [loadedData, setLoadedData] = useState<string | undefined>(undefined);

    const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    const loadData = async (): Promise<string> => {
        console.log("Loading data...");

        await sleep(3000);

        console.log("Data loaded");

        return 'Success';
    }

    useEffect(() => {
        loadData()
            .then(response => setLoadedData(response));
    }, []);

    return (
        <>
            <div>
                <h2>PrimeReact: Tabs (defaultValue="tab1")</h2>
                <Tabs.Root defaultValue="tab1">
                    <Tabs.List>
                        <Tabs.Tab value="tab1" className="flex items-center gap-2">
                            <Code />
                            Code
                        </Tabs.Tab>
                        <Tabs.Tab value="tab2" className="flex items-center gap-2">
                            <InfoCircle />
                            Issues
                        </Tabs.Tab>
                        <Tabs.Tab value="tab3" className="flex items-center gap-2">
                            <CodeBranch />
                            Pull Requests
                        </Tabs.Tab>
                        <Tabs.Tab value="tab4" className="flex items-center gap-2">
                            <Cog />
                            Settings
                        </Tabs.Tab>
                        <Tabs.Indicator />
                    </Tabs.List>
                    <Tabs.Panels>
                        <Tabs.Panel value="tab1">
                            <h2 className="text-lg font-bold">Code</h2>
                            <p className="text-surface-500 mt-1">
                                Browse the source files, review the latest commits, and clone the repository to get started.
                            </p>
                        </Tabs.Panel>
                        <Tabs.Panel value="tab2">
                            <h2 className="text-lg font-bold">Issues</h2>
                            <p className="text-surface-500 mt-1">Track open bugs, feature requests, and ongoing discussions reported by the community.</p>
                        </Tabs.Panel>
                        <Tabs.Panel value="tab3">
                            <h2 className="text-lg font-bold">Pull Requests</h2>
                            <p className="text-surface-500 mt-1">Review proposed changes, leave feedback, and merge contributions into the main branch.</p>
                        </Tabs.Panel>
                        <Tabs.Panel value="tab4">
                            <h2 className="text-lg font-bold">Settings</h2>
                            <p className="text-surface-500 mt-1">
                                Manage repository access, configure integrations, and adjust visibility and collaboration rules.
                            </p>
                        </Tabs.Panel>
                    </Tabs.Panels>
                </Tabs.Root>
            </div>
            <div>
                <h2>PrimeReact: Tabs (defaultValue="tab2")</h2>
                <Tabs.Root defaultValue="tab2">
                    <Tabs.List>
                        <Tabs.Tab value="tab1">Account Info</Tabs.Tab>
                        <Tabs.Tab value="tab2">Payment</Tabs.Tab>
                        <Tabs.Tab value="tab3">Preferences</Tabs.Tab>
                        <Tabs.Indicator />
                    </Tabs.List>
                    <Tabs.Panels>
                        <Tabs.Panel value="tab1">
                            <h2 className="text-lg font-bold">Account Info</h2>
                            <p className="text-surface-500 mt-1">Update your personal information such as name, email address, and profile picture.</p>
                        </Tabs.Panel>
                        <Tabs.Panel value="tab2">
                            <h2 className="text-lg font-bold">Payment</h2>
                            <p className="text-surface-500 mt-1">Manage your subscription plan, view invoices, and update your payment method.</p>
                        </Tabs.Panel>
                        <Tabs.Panel value="tab3">
                            <h2 className="text-lg font-bold">Preferences</h2>
                            <p className="text-surface-500 mt-1">Customize how the application looks and behaves to match your personal preferences.</p>
                        </Tabs.Panel>
                    </Tabs.Panels>
                </Tabs.Root>
            </div>
            <div>
                <h2>Data Load</h2>
                {loadedData ? 'Result: ' + loadedData : 'Loading...'}
            </div>
        </>
    );
}
