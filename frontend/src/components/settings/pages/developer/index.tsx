import { Field, Focusable, TextField, Toggle } from 'decky-frontend-lib';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaReact, FaSteamSymbol } from 'react-icons/fa';

import { setShouldConnectToReactDevTools, setShowValveInternal } from '../../../../developer';
import { useSetting } from '../../../../utils/hooks/useSetting';

export default function DeveloperSettings() {
  const [enableValveInternal, setEnableValveInternal] = useSetting<boolean>('developer.valve_internal', false);
  const [reactDevtoolsEnabled, setReactDevtoolsEnabled] = useSetting<boolean>('developer.rdt.enabled', false);
  const [reactDevtoolsIP, setReactDevtoolsIP] = useSetting<string>('developer.rdt.ip', '');
  const textRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation('DeveloperIndex');

  return (
    <>
      <Field
        label={t('valve_internal.label')}
        description={
          <span style={{ whiteSpace: 'pre-line' }}>
            {t('valve_internal.desc1')} <span style={{ color: 'red' }}>{t('valve_internal.desc2')}</span>
          </span>
        }
        icon={<FaSteamSymbol style={{ display: 'block' }} />}
      >
        <Toggle
          value={enableValveInternal}
          onChange={(toggleValue) => {
            setEnableValveInternal(toggleValue);
            setShowValveInternal(toggleValue);
          }}
        />
      </Field>{' '}
      <Focusable
        onTouchEnd={
          reactDevtoolsIP == ''
            ? () => {
                (textRef.current?.childNodes[0] as HTMLInputElement)?.focus();
              }
            : undefined
        }
        onClick={
          reactDevtoolsIP == ''
            ? () => {
                (textRef.current?.childNodes[0] as HTMLInputElement)?.focus();
              }
            : undefined
        }
        onOKButton={
          reactDevtoolsIP == ''
            ? () => {
                (textRef.current?.childNodes[0] as HTMLInputElement)?.focus();
              }
            : undefined
        }
      >
        <Field
          label={t('react_devtools.label')}
          description={
            <>
              <span style={{ whiteSpace: 'pre-line' }}>{t('react_devtools.desc')}</span>
              <div ref={textRef}>
                <TextField label={'IP'} value={reactDevtoolsIP} onChange={(e) => setReactDevtoolsIP(e?.target.value)} />
              </div>
            </>
          }
          icon={<FaReact style={{ display: 'block' }} />}
        >
          <Toggle
            value={reactDevtoolsEnabled}
            disabled={reactDevtoolsIP == ''}
            onChange={(toggleValue) => {
              setReactDevtoolsEnabled(toggleValue);
              setShouldConnectToReactDevTools(toggleValue);
            }}
          />
        </Field>
      </Focusable>
    </>
  );
}
