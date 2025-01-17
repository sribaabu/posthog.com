import React, { useRef } from 'react'
import root from 'react-shadow/styled-components'
import { Provider as OrgProvider } from '../../hooks/useOrg'
import QuestionForm from '../QuestionForm'
import { Theme } from '../Theme'
import ErrorBoundary from '../ErrorBoundary'

type FormProps = {
    apiHost: string
    organizationId: string
    initialView?: string
    onSubmit: React.FormEventHandler
}

export const Form: React.FC<FormProps> = ({ apiHost, organizationId, initialView, onSubmit }) => {
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <ErrorBoundary>
            {/* @ts-ignore */}
            <root.div ref={containerRef}>
                <OrgProvider value={{ organizationId, apiHost }}>
                    <Theme containerRef={containerRef} />
                    <div className="squeak">
                        {/* @ts-ignore */}
                        <QuestionForm onSubmit={onSubmit} initialView={initialView} />
                    </div>
                </OrgProvider>
            </root.div>
        </ErrorBoundary>
    )
}
