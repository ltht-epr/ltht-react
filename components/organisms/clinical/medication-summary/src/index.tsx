import React from 'react'

import { Card, CardHeader } from '@ltht-react/card'

const MedicationSummary: React.FC<Props> = ({ title = 'Medications' }) => {
  return (
    <Card noData>
      <CardHeader>
        <h3>{title}</h3>
      </CardHeader>
    </Card>
  )
}

interface Props {
  title?: string
}

export default MedicationSummary
