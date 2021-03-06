import { storiesOf } from '@storybook/react'
import React from 'react'
import Box from 'ui-box'
import { Checkbox } from '../../checkbox'

storiesOf('checkbox', module).add('Checkbox', () => (
  <Box padding={40}>
    <Checkbox label="Checkbox default" />
    <Checkbox checked label="Checkbox checked" />
    <Checkbox disabled label="Checkbox disabled" />
    <Checkbox disabled checked label="Checkbox checked disabled" />
  </Box>
))
