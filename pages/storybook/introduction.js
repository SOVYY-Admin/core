import { Section, Text } from '../../components/components'; 
import { Hero } from '../../modules/modules'; 

export default function Introduction() {

  return (
    <div className=''>

      <Section size="screen" spacing="screen" styling="bg-primary-500"> 
        <Text variant="d" tag="h1" styling="text-white text-center max-w-960 m-auto">Welcome to SOVYY Design System</Text>
      </Section>
      
    </div>
  )
}
