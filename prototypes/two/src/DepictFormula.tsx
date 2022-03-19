import React from "react";
import { peekKey, takeKey, unparse_to_string } from "./App";
import { RemButton } from "./RemButton";
import { BooleanFormula, Formula, isBooleanFormula, isFormulaNonEmpty, Yellow } from "./input-definitions";
import { parseCheck } from "./interpreter";
import { ValidatedArea } from "./ValidatedArea";

interface Props {

    disabled: boolean
    key: number
    formula: Formula
    depth: number
    numExamples: number

    formulaChange: (newForm: Formula) => void
}

function DepictFormula(props: Props) {
    function validProg(text:(string | undefined)) {
        try {
            parseCheck(text);
        } catch (e) {
            return false;
        }

        return true;
    }

    // this is pretty macabre...
    function remChild(deadChild: Formula) {
        if (isBooleanFormula(props.formula)) {
            const aliveChildren = props.formula.thenChildren.filter((child) => child !== deadChild);
        }
        const aliveChildren = isBooleanFormula(props.formula) ? props.formula.thenChildren.filter((child) => child !== deadChild) : [];
        props.formulaChange({ ...props.formula, thenChildren: aliveChildren });
    }

    function childChange(newChild: Formula, modChild: ({} | Formula)) {
        let children;
        if (isBooleanFormula(props.formula)) {
            if ((isFormulaNonEmpty(modChild) && props.formula.thenChildren.indexOf(modChild) === -1) || !isFormulaNonEmpty(modChild)) {
                children = [...props.formula.thenChildren, newChild];
            } else {
                children = props.formula.thenChildren.map((child) => child === modChild ? newChild : child);
            }
        }
        props.formulaChange({ ...props.formula, thenChildren: children });
    }

    function countWidth(formula: Formula): number {
        if (!isBooleanFormula(formula)) {
            return 1;
        } else {
            return formula.thenChildren.reduce((acc, child) => acc + countWidth(child), 2);
        }
    }

    if (props.depth > 1) {
        return (
            <React.Fragment>
                <th>{/* empty cell to align with parent input */}</th>
                {isBooleanFormula(props.formula) ?
                    <React.Fragment>
                        {props.formula.thenChildren.map((child) => (
                            <DepictFormula
                                disabled={props.disabled}
                                key={child.key}
                                formula={child}
                                depth={props.depth - 1}
                                numExamples={props.numExamples}
                                formulaChange={(formula) => childChange(formula, child)}
                            />))}
                        <th>{/* empty cell to align with child input */}</th>
                    </React.Fragment>
                    : <script />}
            </React.Fragment>
        );
    } else {
        if (isBooleanFormula(props.formula)) {
            const reals = props.formula.thenChildren.map((child) => (
                <th key={child.key} colSpan={countWidth(child)} >
                    <div className='flex_horiz'>
                        <ValidatedArea
                            dummy={false}
                            placeholder={'Formula'}
                            text={props.disabled ? unparse_to_string(child.prog.validated) : undefined}
                            rawText={child.prog.raw}
                            isValid={validProg}
                            onValid={(text) => childChange({
                                ...child,
                                prog: {raw: text, validated: parseCheck(text)}
                            },
                                child)}
                            onEmpty={() => childChange({
                                ...child,
                                prog: { raw: '', validated: {yellow: 'yellow' }}
                            },
                                child)}
                        />
                        <RemButton
                            title={'Remove this formula'}
                            onClick={props.disabled ? undefined : (() => remChild(child))}
                        />
                    </div>
                </th>
            ));

            const dummy = (
                <th key={peekKey()} colSpan={1}>
                    <div className='flex_horiz'>
                        <ValidatedArea
                            dummy={true}
                            placeholder='Formula'
                            text={props.disabled ? '' : undefined}
                            rawText=''
                            isValid={validProg}
                            onValid={(text) => childChange({
                                prog: {raw: text, validated: parseCheck(text)},
                                outputs: Array(props.numExamples).fill({raw: '', validated: {yellow: 'yellow'}}),
                                key: takeKey()
                            },
                                {})}
                            onEmpty={()=>null}
                        />
                    </div>
                </th>
            );

            return (
                <React.Fragment>
                    <th>{/* empty cell to align with parent input */}</th>
                    <React.Fragment>
                        {[...reals, dummy]}
                    </React.Fragment>
                </React.Fragment>
            );
        } else {

            return (
                <React.Fragment>
                    <th>{/* empty cell to align with parent input */}</th>
                </React.Fragment>
            );
        }
    }
}

export { DepictFormula };